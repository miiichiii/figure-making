# SVG Plotter v11

論文品質のグラフを作成するためのブラウザベースツール。データはローカルで処理され、外部送信されません。

## リンク

- **アプリ**: https://miiichiii.github.io/figure-making/
- **ヘルプ (日本語)**: https://miiichiii.github.io/figure-making/help.html
- **Help (English)**: https://miiichiii.github.io/figure-making/help_en.html

## 使い方

`index.html` をブラウザで開くだけで使用できます。

## スクリーンショット再生成

```bash
npm install
node capture_assets.js
```

`assets/` フォルダに6枚の画像が生成されます:
- `hero_shot.png` - Time Series モード
- `comparison_shot.png` - Comparison モード + 統計
- `survival_shot.png` - Survival モード（Kaplan-Meier）
- `dark_mode.png` - ダークテーマ
- `controls_shot.png` - Visual Controls
- `explorer_shot.png` - Explorer パネル

## 開発者

Michito Hamada (Ibaraki Prefectural University of Health Sciences)
