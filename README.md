# VRChat Calendar App

VRChatイベントを管理するためのカレンダーアプリケーション

## 🚀 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: TailwindCSS 4.x
- **Runtime**: Node.js 24.11.0
- **Package Manager**: npm 11.6.2

## 📋 前提条件

- Node.js 24.11.0
- npm 11.6.2

推奨: [Volta](https://volta.sh/)を使用することで、プロジェクトで指定されたNode.jsとnpmのバージョンが自動的に適用されます。

## 🛠️ セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/yutaro04/vrchat-calender-app.git
cd vrchat-calender-app
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📝 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | プロダクションビルドを作成 |
| `npm run start` | プロダクションサーバーを起動 |
| `npm run lint` | ESLintでコードをチェック |

## 📁 ディレクトリ構成

```
vrchat-calender-app/
├── public/          # 静的ファイル
├── src/
│   ├── app/         # Next.js App Router（ページ、レイアウト）
│   ├── components/  # 再利用可能なReactコンポーネント
│   │   ├── ui/      # 基本的なUIコンポーネント
│   │   └── features/# 機能別コンポーネント
│   ├── lib/         # ユーティリティ関数、ヘルパー
│   ├── types/       # TypeScript型定義
│   ├── hooks/       # カスタムReact Hooks
│   └── styles/      # グローバルスタイル
├── eslint.config.mjs
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## 🎨 コーディング規約

### TypeScript

- **strict mode**: 有効（型安全性を重視）
- **any型**: 使用禁止（`unknown`を使用し型ガードで絞り込む）
- **型定義**: 関数の引数と戻り値は明示的に定義
- **import**: パスエイリアス `@/*` を使用

```typescript
// ✅ Good
import { Component } from '@/components/ui/Component';

export function getUserName(user: User): string {
  return user.name;
}

// ❌ Bad
import { Component } from '../../../components/ui/Component';

export function getUserName(user: any) {
  return user.name;
}
```

### 命名規則

- **コンポーネント**: PascalCase (`CalendarEvent.tsx`)
- **関数・変数**: camelCase (`getUserEvents`)
- **定数**: UPPER_SNAKE_CASE (`API_ENDPOINT`)
- **型・インターフェース**: PascalCase (`User`, `EventProps`)

### ブランチ戦略

- `main`: 本番環境
- `develop`: 開発環境
- `feature/機能名`: 新機能開発
- `fix/修正内容`: バグ修正
- `docs/ドキュメント内容`: ドキュメント更新

## 🔍 コード品質

コミット前に必ずLintを実行してください:

```bash
npm run lint
```
