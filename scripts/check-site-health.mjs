import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const checkExternal = process.argv.includes('--external');
const skippedDirectories = new Set(['.git', 'node_modules']);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && !skippedDirectories.has(entry.name)) {
      files.push(...await walk(path.join(directory, entry.name)));
    } else if (
      entry.isFile() &&
      entry.name.endsWith('.html') &&
      !entry.name.includes('.backup_')
    ) {
      files.push(path.join(directory, entry.name));
    }
  }
  return files;
}

function extractReferences(html) {
  return [...html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function localTarget(sourceFile, reference) {
  const clean = reference.split('#')[0].split('?')[0];
  if (!clean || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(clean)) return null;
  const decoded = decodeURIComponent(clean);
  return decoded.startsWith('/')
    ? path.join(root, decoded.slice(1))
    : path.resolve(path.dirname(sourceFile), decoded);
}

async function exists(target) {
  const candidates = [target, path.join(target, 'index.html')];
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return true;
    } catch {
      // Continue to the directory-index candidate.
    }
  }
  return false;
}

async function checkCriticalLinks() {
  const config = JSON.parse(await readFile(path.join(root, 'ops', 'critical-links.json'), 'utf8'));
  const results = [];
  for (const item of config.links) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(item.url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': 'Fushimi-Imari-Site-Health/1.0' },
      });
      results.push({ ...item, status: response.status, ok: response.status < 400 });
    } catch (error) {
      results.push({ ...item, status: 'ERROR', ok: false, detail: error.name });
    } finally {
      clearTimeout(timeout);
    }
  }
  return results;
}

const htmlFiles = await walk(root);
const brokenInternal = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const reference of extractReferences(html)) {
    const target = localTarget(file, reference);
    if (target && !await exists(target)) {
      brokenInternal.push({
        file: path.relative(root, file),
        reference,
      });
    }
  }
}

if (brokenInternal.length) {
  console.error('Broken internal links or assets:');
  for (const item of brokenInternal) console.error(`- ${item.file}: ${item.reference}`);
} else {
  console.log(`Internal check passed (${htmlFiles.length} HTML files).`);
}

if (checkExternal) {
  const results = await checkCriticalLinks();
  console.log('\nCritical public links:');
  for (const result of results) {
    const mark = result.ok ? 'OK' : 'WARN';
    console.log(`- ${mark} ${result.status} ${result.name}: ${result.url}`);
  }
  if (results.some((result) => !result.ok)) {
    console.warn('\nOne or more public services could not be reached. Recheck them manually before editing URLs.');
  }
}

if (brokenInternal.length) process.exitCode = 1;
