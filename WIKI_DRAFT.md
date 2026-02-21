# SVG Plotter - User Manual / ユーザーマニュアル

[English follows Japanese / 英語の後に日本語が続きます]

---

## English Version

**Create publication-quality graphs in your browser instantly.**
Simply copy and paste data from spreadsheets like Excel to generate beautiful vector images (SVG).

🔗 **Launch App**: [Launch SVG Plotter](https://miiichiii.github.io/figure-making/)

---

### ✨ Key Features

1. **Publication Quality**
   - **Vector Output**: Download in SVG format, which never pixelates. Perfect for further editing in Illustrator or PowerPoint.
   - **Academic Design**: Standard academic styles (Arial/Helvetica fonts, white background, black axes) are adopted by default.

2. **Diverse Graphs & Statistical Analysis**
   - **Comparison**: Bar graphs + Dot plots.
   - **Time Series**: Line graphs for changes over time.
   - **Survival**: Kaplan-Meier curves.

3. **Privacy & Security (Local Processing)**
   - All data is processed **within your browser (on your PC)**.
   - No research data is sent to external servers, making it safe for unpublished data.

---

### 📊 Statistical Methods

The tool automatically performs the following tests based on your data:

1. **Comparison (2 Groups)**: Welch's t-test (default) and Brunner-Munzel Test (robust non-parametric).
2. **Comparison (3+ Groups)**: One-way ANOVA and Dunnett's Test (Control vs. others).
3. **Survival Analysis**: Log-Rank Test.
4. **Reproducibility**: Export R code to verify the analysis in professional statistical software.

---

### 🚀 Quick Start

1. **Prepare Data**: Format your data in Excel.
2. **Copy & Paste**: Paste data into the "Input Data" area on the left.
3. **Plot**: The graph will preview automatically. Adjust colors and axes in the control panel.
4. **Download**: Click "Download SVG" to save your figure.

---

### ⚠️ Disclaimer
Statistical results (p-values, etc.) are for screening purposes only. For final publications, always verify results using dedicated software (GraphPad Prism, R, etc.).

---
---

## 日本語版

**論文投稿・学会発表レベルのグラフを、ブラウザ上で一瞬で作成するツールです。**
Excelなどのスプレッドシートからデータをコピー＆ペーストするだけで、美しいベクター画像（SVG）を生成します。

🔗 **アプリを開く**: [Launch App](https://miiichiii.github.io/figure-making/)

---

### ✨ 主な特徴

1. **論文品質（Publication Quality）**
   - **ベクター出力**: 拡大しても劣化しないSVG形式でダウンロード可能。IllustratorやPowerPointでの編集に最適です。
   - **学術的なデザイン**: シンプルで視認性の高い、論文標準のスタイル（Arial/Helveticaフォント、白背景、黒軸）をデフォルト採用しています。

2. **多彩なグラフと統計解析**
   - **Comparison (比較)**: 棒グラフ + ドットプロット。
   - **Time Series (時系列)**: 経時変化の折れ線グラフ。
   - **Survival (生存率)**: カプランマイヤー曲線。

3. **完全ローカル処理（セキュリティ）**
   - データはすべて**ブラウザ内（あなたのPC）**で処理されます。
   - 外部サーバーに研究データを送信しないため、未発表データでも安心して使用できます。

---

### 📊 統計解析の詳細（Statistical Methods）

本ツールでは、データに応じて以下の統計検定を自動的に実行します。

1. **2群間の比較**: Welch's t-test（デフォルト）、Brunner-Munzel Test（堅牢な非パラメトリック検定）。
2. **多群間の比較**: One-way ANOVA（分散分析）、Dunnett's Test（コントロール群との多重比較）。
3. **生存率の比較**: Log-Rank Test。
4. **再現性の確保**: 解析内容を再現するための「Rコード」を書き出し可能です。

---

### 🚀 クイックスタート

1. **データを用意する**: Excelなどでデータを整形します。
2. **コピペする**: 画面左側の「Input Data」エリアにデータを貼り付けます。
3. **描画（Plot）**: 自動的にグラフが描画されます。コントロールパネルで色や軸を微調整します。
4. **ダウンロード**: 「Download SVG」ボタンを押して保存します。

---

### ⚠️ 免責事項
統計解析結果はあくまで目安です。論文投稿等の最終的な解析には、必ず専門の統計ソフト（GraphPad Prism, R等）を使用してください。
