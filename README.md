# SVG Plotter v10

論文品質のグラフを作成するためのブラウザベースツール。データはローカルで処理され、外部送信されません。

## 使い方

`index.html` をブラウザで開くだけで使用できます。

## ヘルプページ

`help.html` をブラウザで開くと、機能紹介ページを確認できます。

## スクリーンショット再生成

```bash
npm install
node capture_assets.js
```

`assets/` フォルダに4枚の画像が生成されます:
- `hero_shot.png` - Time Series モード
- `comparison_shot.png` - Comparison モード + 統計
- `survival_shot.png` - Survival モード（Kaplan-Meier）
- `dark_mode.png` - ダークテーマ

## 開発者

Michito Hamada (Ibaraki Prefectural University of Health Sciences)
