# 富士美いまり HP 画像生成プロンプト集 v4
**方向性：Bright Modern Feminine（明るく現代的、her lip to / eimy / Francfranc / K-beauty 系）**

v3で生成すると「古い／侘び寂び」になってしまった反省を反映。
リサーチ済み参照ブランド：Her lip to、eimy istoire、Francfranc、K-beauty (Tirtir/Beauty of Joseon/Anua系)、Pairs等マッチング系UI

---

## 🎨 共通スタイル v4（古さの罠を回避）

### ❌ NG ワード（古臭くなる）
```
antique, vintage, weathered, wabi-sabi, candlelight, tungsten, 
ryokan, walnut, mahogany, oak, brass, leather worn,
muted earth, bordeaux deep, traditional, classical
```

### ✅ OK ワード（モダン感）
```
bright airy, fresh dewy, glossy and matte mix, modern minimalist,
soft pastel, pearlescent, luminous, clean editorial,
Korean K-beauty aesthetic, her lip to feminine romantic,
Francfranc home aesthetic, eimy istoire ballerina,
natural light from window, white marble, acrylic surface,
Y2K modern, soft champagne gold (not antique gold)
```

### 🎨 新色調パレット v4
- **Base**: クリームホワイト / アイボリー / パールホワイト
- **Accent 1**: ソフトピンク / ライトピンク / ベビーピンク / ダスティローズ
- **Accent 2**: シャンパンゴールド / ローズゴールド（アンティークゴールド禁止）
- **Accent 3**: セージグリーン / ラベンダー / ペールブルー / ピーチ
- **質感**: グロッシー × マット混在、リボン、サテン、チュール、レース、パール

### 💡 参照ブランド早見
| 参照 | キーワード |
|---|---|
| Her lip to | レース・リボン・チュール・花柄・フェミニン・ロマンチック |
| eimy istoire | パピヨン・バレリーナ・ペプラム・チュール・上品ガーリー |
| Francfranc | スカラップ・キルト・パステル・フリル・かわいい |
| K-beauty (Tirtir/Anua/Beauty of Joseon) | 透明感・水滴・dewy・グロッシー・ミニマル |
| Pairs/with系 | ハート・パステル・親しみ・フレッシュ |

### 🛠 推奨設定
| ツール | パラメータ |
|---|---|
| Midjourney | `--ar 4:3 --v 6.1 --style raw --s 400` (s上げてスタイル強化) |
| DALL-E 3 | プロンプトそのまま、末尾に `bright modern editorial, K-beauty aesthetic, photorealistic` |
| Stable Diffusion | Negative: `text, watermark, people, person, vintage, antique, dark moody, wabi-sabi, oversaturated, low quality, blurry` |
| Adobe Firefly | "Photo" + Composition: Close-up or Tabletop |

---

## ① FORTUNE （モダン × 神秘）
**ファイル名**：`Official/images/cat_fortune.jpg`
**情景**：白マーブル天板に置かれた、現代的なクリスタルと薄い和紙ノート

### PROMPT

```
A bright modern still life of a feminine spiritual aesthetic
on a cream white marble surface,
a small clear quartz crystal sphere catching natural light,
an open thin handmade washi paper notebook with delicate gold ink strokes,
a sprig of fresh white plum blossom in a small glass vase,
delicate gold-toned mizuhiki cord arranged like a soft ribbon,
a small pearl essential oil bottle,
soft natural light from a window from upper left,
cream, pale lavender, champagne gold, and soft pink color palette,
overhead shot at 30-degree angle, 50mm lens, shallow depth of field,
bright airy modern editorial aesthetic (think modern Tokyo magazine),
photorealistic, no people, no faces, no text, no logos,
fresh luminous mood, NOT vintage NOT antique,
--ar 4:3 --v 6.1 --style raw --s 400
```

---

## ② BEAUTY （K-beauty × Her lip to）
**ファイル名**：`Official/images/cat_beauty.jpg`
**情景**：白マーブル天板にKビューティーボトル、芍薬の花びら、リボン

### PROMPT

```
A bright luminous K-beauty still life on a polished white marble surface,
three clear glass skincare bottles with rose gold caps and pearlescent serum,
fresh dew droplets visible on the marble for dewy glass-skin effect,
a single fresh white peony with soft pink petals,
a delicate silk ribbon in dusty rose loosely draped,
a small champagne gold tweezer and a rose gold compact mirror,
soft bright natural light from a large window on the right,
cream, soft pink, pearl white, and champagne gold color palette,
overhead shot at 45-degree angle, 50mm lens, shallow depth of field,
Korean K-beauty editorial style (think Tirtir / Anua / Beauty of Joseon aesthetic),
bright fresh feminine mood, glossy and matte mix surfaces,
photorealistic, no people, no faces, no text, no logos,
NOT vintage NOT antique NOT dark,
--ar 4:3 --v 6.1 --style raw --s 400
```

---

## ③ MARRIAGE （モダンウェディング × Her lip to）
**ファイル名**：`Official/images/cat_marriage.jpg`
**情景**：白いリネンに置かれた指輪・パール・サテンリボン

### PROMPT

```
A bright romantic modern bridal still life on a pure white linen tablecloth,
a delicate solitaire diamond ring in rose gold setting,
a strand of small pearls coiled gently,
a satin ribbon in soft pink loosely arranged,
fresh white anemones and a single peony bud,
a small mirror with rose gold frame partially visible,
soft natural window light, no shadows too dark,
ivory, blush pink, pearl white, and champagne gold color palette,
overhead shot at 30-degree angle, 50mm lens,
modern bridal magazine aesthetic (think Hanayome modern / Her lip to wedding),
bright dreamy feminine mood,
photorealistic, no people, no faces, no text, no logos,
NOT vintage NOT antique,
--ar 4:3 --v 6.1 --style raw --s 400
```

---

## ④ SHOOTING （モダン撮影現場）
**ファイル名**：`Official/images/cat_shooting.jpg`
**情景**：白いメイク台に現代的カメラと小物

### PROMPT

```
A bright modern still life of a feminine dressing room scene
on a white acrylic or glossy white surface,
a sleek modern mirrorless camera (Sony A7 style) with a soft pink strap,
fresh Polaroid Go photos scattered (white-framed, modern),
a tube of glossy pink lipstick uncapped,
a small champagne gold compact mirror open,
a soft pink silk scrunchie placed casually,
bright natural light from above, soft even lighting,
white, soft pink, champagne gold, and pearl color palette,
overhead shot at 30-degree angle, 35mm lens, shallow depth of field,
modern Tokyo studio aesthetic, fresh feminine editorial mood,
photorealistic, no people, no faces, no text, no logos,
NOT vintage NOT antique NOT dark,
--ar 4:3 --v 6.1 --style raw --s 400
```

---

## ⑤ FASHION （Her lip to × eimy istoire コーディネート）
**ファイル名**：`Official/images/cat_fashion.jpg`
**情景**：白いリネンに並べられた、フェミニン上品なコーディネート小物

### PROMPT

```
An elegant feminine outfit flat lay on a soft white linen surface,
a pair of cream satin pointed-toe heels with delicate ankle ribbon,
a small structured handbag in baby pink with gold chain strap,
a tulle ribbon and a satin bow in dusty pink loosely arranged,
delicate pearl drop earrings and a thin gold chain necklace,
a folded cashmere cardigan in soft lavender at the corner,
overhead shot directly from above, 35mm lens,
bright soft natural light, gentle even shadows,
cream, baby pink, dusty pink, soft lavender, and champagne gold color palette,
feminine romantic fashion magazine flat lay
(think Her lip to / eimy istoire collection page aesthetic),
bright dreamy ballerina-inspired feminine mood,
photorealistic, no people, no faces, no text, no logos,
NOT vintage NOT antique,
--ar 4:3 --v 6.1 --style raw --s 400
```

---

## ⑥ LIFESTYLE （Francfranc風モダンおうち時間）
**ファイル名**：`Official/images/cat_lifestyle.jpg`
**情景**：白いテーブルに、ピンクのカップとふんわりした朝の景色

### PROMPT

```
A bright cozy modern morning still life on a clean white wood or marble table,
a cup of cafe latte in a soft pink ceramic mug with delicate scalloped edge
(Francfranc-style cup), still steaming gently,
an open hardcover paperback book with cream-colored pages,
a small clear glass vase holding fresh pink ranunculus and one stem of pampas grass,
a pair of round gold-frame reading glasses placed casually,
a soft linen napkin in baby pink folded loosely,
a small scalloped tray in cream color holding a tiny pastry,
bright morning sunlight streaming through a window,
cream, soft pink, blush, pale gold, and pearl color palette,
overhead shot at 30-degree angle, 50mm lens, shallow depth of field,
bright modern feminine lifestyle magazine aesthetic
(Francfranc home / Kinfolk modern feminine),
fresh airy contemplative mood,
photorealistic, no people, no faces, no text, no logos,
NOT vintage NOT antique NOT dark,
--ar 4:3 --v 6.1 --style raw --s 400
```

---

## ⑦ OFFER 5特典のカバー画像（A4縦 PDFカバー風）

各特典のbonusカードに差し込み予定。**3:4比率**。

### 特典01：30代の婚活ノート
**ファイル名**：`Official/images/gift_01_marriage.jpg`

```
A modern minimalist book cover mockup photographed at slight angle
on a soft pink linen surface, baby pink textured matte paper cover
with a small delicate line illustration of two interlocking rings
in champagne gold ink centered upper half,
no text but elegant typography space reserved,
soft natural light from upper left,
baby pink, ivory, and champagne gold color palette,
A4 vertical format mockup, modern bridal guide aesthetic
(Her lip to wedding style), photorealistic,
NOT vintage NOT antique,
--ar 3:4 --v 6.1 --style raw --s 400
```

### 特典02：美容医療を考える前のメモ
**ファイル名**：`Official/images/gift_02_clinic.jpg`

```
A bright minimalist guidebook cover mockup on a white marble surface,
soft pink textured matte paper cover with a subtle line drawing
of a checklist with three pearl dots in rose gold color,
no actual text, refined abstract iconography,
soft window light from the right, fresh airy shadows,
white, soft pink, pearl, and rose gold color palette,
A4 vertical format mockup, modern wellness magazine aesthetic,
photorealistic, NOT vintage,
--ar 3:4 --v 6.1 --style raw --s 400
```

### 特典03：いまり式・恋愛相性の読み（四柱推命モダン版）
**ファイル名**：`Official/images/gift_03_fortune.jpg`

```
A modern Japanese-inspired guidebook cover mockup on a white marble surface,
soft lavender textured washi paper cover with a delicate gold dust constellation pattern,
a small crescent moon and one tiny star in champagne gold leaf accent centered,
soft natural light from upper right,
NO tarot imagery (Eastern fortune-telling theme, but modern not traditional),
soft lavender, pearl white, champagne gold, and pale pink color palette,
A4 vertical format mockup, photorealistic,
modern feminine spiritual aesthetic,
NOT vintage NOT dark moody,
--ar 3:4 --v 6.1 --style raw --s 400
```

### 特典04：高身長・大きめ女子の私服EDIT
**ファイル名**：`Official/images/gift_04_fashion.jpg`

```
A bright fashion styling guide cover mockup on a soft white linen surface,
warm cream textured matte paper cover with a minimalist line drawing
of an elegant A-line dress silhouette in dusty pink ink,
a small ribbon detail at the corner,
no actual text, elegant minimalist composition,
soft natural light from upper left,
cream, dusty pink, soft sage, and ivory color palette,
A4 vertical format mockup, Her lip to-inspired styling guide aesthetic,
photorealistic, NOT vintage,
--ar 3:4 --v 6.1 --style raw --s 400
```

### 特典05：いまりの夜の手紙
**ファイル名**：`Official/images/gift_05_letter.jpg`

```
An intimate romantic modern still life on a soft cream wood surface,
a delicate cream envelope sealed with a pearl-pink wax stamp,
a single dried pink rose petal nearby,
a coiled rose gold thread placed gently,
soft window light from one side, bright gentle shadows,
no text visible, modern intimate letter aesthetic,
pearl pink, cream, rose gold, and ivory color palette,
square or 3:4 format, photorealistic,
intimate bright modern feminine mood,
NOT vintage NOT dark NOT antique,
--ar 3:4 --v 6.1 --style raw --s 400
```

---

## 🎯 生成優先順

1. **最優先**（CTRに直撃）：① FORTUNE / ② BEAUTY / ③ MARRIAGE / ⑤ FASHION
2. **次優先**：④ SHOOTING / ⑥ LIFESTYLE
3. **追って**：OFFER 5特典のカバー画像

---

## 📁 ファイル配置（生成完了後）

```
Official/images/
  ├ portrait_hero.jpg     (既存)
  ├ portrait_about.jpg    (既存)
  ├ cat_fortune.jpg       ← ①
  ├ cat_beauty.jpg        ← ②
  ├ cat_marriage.jpg      ← ③
  ├ cat_shooting.jpg      ← ④
  ├ cat_fashion.jpg       ← ⑤
  ├ cat_lifestyle.jpg     ← ⑥
  ├ gift_01_marriage.jpg  ← OFFER 01
  ├ gift_02_clinic.jpg    ← OFFER 02
  ├ gift_03_fortune.jpg   ← OFFER 03
  ├ gift_04_fashion.jpg   ← OFFER 04
  └ gift_05_letter.jpg    ← OFFER 05
```

---

## 💡 生成失敗パターンと対処

| 出てしまう症状 | 対処 |
|---|---|
| 画像が暗い／落ち着きすぎ | `bright` `airy` `fresh` を強調、`--style raw --s 400` 必須 |
| アンティーク感 | `NOT vintage NOT antique` を末尾に追加、色は ✅リスト厳守 |
| 人物が出る | `--no person, people, face, hands, body` 追加 |
| 派手すぎる | `soft` `subtle` `delicate` を主語に、`--style raw` で抑制 |
| 安っぽい | `editorial magazine` `K-beauty aesthetic` を強調 |

生成完了後、上記ファイル名で `Official/images/` に配置してください。SVGアイコン → 実画像差し替えパッチは即当てます。
