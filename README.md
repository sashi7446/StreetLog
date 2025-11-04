# MOC - Street Fighter 情報メディア

Street Fighterシーンの週刊情報をお届けするメディアサイト

🌐 **公開URL:** https://sashi7446.github.io/StreetLog/

---

## 📋 概要

- **Street Fighter専門メディア**: SF6を中心とした大会・ニュース情報
- **週刊発行形式**: 毎週更新される「今週の注目」
- **新聞スタイルUI**: シンプルで読みやすいレイアウト
- **スマホ最適化**: モバイルファーストなレスポンシブデザイン
- **複数配信対応**: メイン/サブ/日本語配信など複数チャンネルから選択可能
- **過去大会管理**: 過去の大会は自動で折りたたみ、結果記事へのリンク表示

---

## 🚀 週刊更新の方法

### 1. 前週のファイルをコピー

```bash
cp content/weeks/2025-w45.md content/weeks/2025-w46.md
```

### 2. ファイルを編集

`content/weeks/2025-w46.md` を開いて以下を更新：

```yaml
---
week: 46  # ← 週番号を変更
year: 2025
startDate: "2025-11-16"  # ← 日付を更新
endDate: "2025-11-22"

tournaments:
  - id: capcom-cup-xi
    name: Capcom Cup XI
    date: 2025年11月9日 18:00 - 11月10日  # 時刻を含める
    description: Street Fighter 6の世界最高峰の大会。賞金総額200万ドル。
    location: Los Angeles, CA  # 開催地（オンラインの場合は「オンライン」）
    participants: 48人
    games:
      - Street Fighter 6
    featuredPlayers:
      - ウメハラ
      - ときど
      - Punk
    resultUrl: https://example.com/results  # 大会結果記事URL（オプション・過去大会用）
    streams:
      - category: main  # main | sub | japanese
        label: メイン配信
        channels:
          - id: capcom-fighters-main
            platform: twitch  # twitch | youtube
            channelName: CapcomFighters
            url: https://www.twitch.tv/capcomfighters
            isLive: true  # 配信中ならtrue
      - category: japanese
        label: 日本語配信
        channels:
          - id: capcom-jp
            platform: youtube
            channelName: CAPCOM公式チャンネル
            url: https://www.youtube.com/@capcom
            isLive: true

news:
  - id: sf6-season3
    title: Street Fighter 6 Season 3の詳細が発表
    description: Capcomが2026年春開始のSeason 3情報を公開。新キャラ4体とバランス調整を予定。
    category: release  # release | transfer | event | other

communityTopics:
  - id: frame-data-tool
    text: "SF6フレームデータツールの新バージョンがリリース。パッチ1.4.0に対応。"
    sourceUrl: "https://twitter.com/example"  # オプション
---
```

### 3. コミット & プッシュ

```bash
git add content/weeks/
git commit -m "Add week 46 content"
git push
```

→ GitHub Actionsが自動でデプロイ（数分で反映）

---

## 🛠️ 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Markdown + YAML frontmatter** (コンテンツ管理)
- **GitHub Pages** (ホスティング)
- **GitHub Actions** (自動デプロイ)

---

## 📁 プロジェクト構造

```
StreetLog/
├── app/                     # Next.js App Router
│   ├── page.tsx             # ホームページ
│   ├── layout.tsx           # 共通レイアウト
│   └── globals.css          # グローバルスタイル
├── components/              # UIコンポーネント
│   ├── Navigation.tsx       # ヘッダーナビゲーション
│   ├── FeaturedTournamentCard.tsx  # ヒーローカード（アコーディオン対応）
│   ├── TournamentCard.tsx   # 通常の大会カード（アコーディオン対応）
│   ├── NewsItem.tsx         # ニュースアイテム
│   ├── LiveBadge.tsx        # 配信中バッジ
│   ├── StreamButton.tsx     # 配信ボタン
│   └── StreamModal.tsx      # 配信チャンネル選択モーダル
├── content/                 # Markdownコンテンツ
│   └── weeks/               # 週刊データ
│       ├── 2025-w44.md
│       └── 2025-w45.md
├── lib/                     # ユーティリティ
│   ├── content.ts           # Markdownパーサー
│   └── dateUtils.ts         # 日時パース・過去判定
├── types/                   # TypeScript型定義
│   └── tournament.ts        # データ型定義
└── docs/                    # ドキュメント
    └── project-design.md    # プロジェクト設計書
```

---

## 💻 ローカル開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで確認
# http://localhost:3000

# ビルド
npm run build
```

---

## 🎨 デザインシステム

### カラーパレット

```
ブランドカラー: #9BA7AB (グレイッシュブルー)
アクセントカラー: #374B7C (深い青 - CTA用)
背景: #F9F9F9
テキスト: #111827
ニュートラルボーダー: #7B7E82
```

### 配信状態の表示

- **配信中 (チャンネルのisLive: true)**
  - 🔴 LIVEバッジ（アニメーション）
  - ブランドカラーの枠線
  - ボタン: 「ライブ配信を見る」

- **配信予定 (未来の大会、isLive: false)**
  - 通常の枠線
  - ボタン: 「配信予定を確認」

- **過去の大会 (開始時刻+12時間経過)**
  - 半透明表示（opacity-50）
  - アコーディオンで折りたたみ（三角マークで展開）
  - ボタン: 「配信先リンクを見る」
  - 結果ボタン表示（resultUrlがある場合）

### 複数配信チャンネル

大会カードの配信ボタンをクリックすると、モーダルオーバーレイで配信チャンネルを選択可能：
- **メイン配信**: 主要チャンネル
- **サブ配信**: サブステージ（EVO2, EVO3等）
- **日本語配信**: 日本語実況チャンネル

各チャンネルにはプラットフォームアイコン（YouTube/Twitch）とライブ状態が表示されます。

### 視覚的階層

- **ヒーローカード**: 最初の大会を大きく強調表示（「今週のイチオシ」）
- **通常カード**: 2番目以降の大会
- **開催地表示**: 規模を示す（Los Angeles, CA / 東京 / オンライン）

---

## 📰 コンテンツの種類

### ニュース (news)

- **release** 🚀: Season発表、パッチノート、新キャラ
- **event** 📅: 大会フォーマット変更、イベント告知
- **transfer** 🔄: プレイヤー移籍
- **other** 📰: インタビュー、その他

### 最近の界隈 (communityTopics)

- コミュニティツールのリリース
- ローカルシーンの成長
- フレームデータツール、対戦履歴ツール
- Twitter等で話題のトピック

### 大会情報 (tournaments)

- **世界大会**: Capcom Cup, EVO
- **国内トップリーグ**: TOPANGA LEAGUE
- **全国規模**: 参加者500名以上の大会
- **オンライン**: 週次ランキングバトル等

---

## 🎯 ペルソナ

**ターゲットユーザー:**
- 大学3年生（20-21歳）
- Street Fighter界隈の初心者
- 課題: "何を見ればいいかわからない"
- ニーズ: "簡潔に教えてくれる"情報
- デバイス: スマホメイン

**UX設計のポイント:**
- 3秒で重要情報を把握できる
- ワンクリックで配信視聴可能
- 大会の重要度が視覚的に明確
- 色に依存しない情報設計（アクセシビリティ）

---

## 📝 ライセンス

ISC

---

## 🤝 コントリビューション

週刊コンテンツの更新は `content/weeks/` 以下のMarkdownファイルを編集してPRを送ってください。

詳細な設計思想は `docs/project-design.md` を参照。

---

最終更新: 2025-11-04 (Street Fighter専門化)
