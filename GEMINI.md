# プロジェクト概要

このドキュメントは、現在のNext.jsプロジェクトの概要をまとめたものです。

## `package.json`

- **名前:** my-app
- **バージョン:** 0.1.0
- **プライベート:** true

### スクリプト

- `dev`: `next dev --turbopack`
- `build`: `next build --turbopack`
- `start`: `next start`
- `lint`: `eslint`

### 依存関係

- `react`: `19.1.0`
- `react-dom`: `19.1.0`
- `next`: `15.5.2`

### 開発依存関係

- `typescript`: `^5`
- `@types/node`: `^20`
- `@types/react`: `^19`
- `@types/react-dom`: `^19`
- `@tailwindcss/postcss`: `^4`
- `tailwindcss`: `^4`
- `eslint`: `^9`
- `eslint-config-next`: `15.5.2`
- `@eslint/eslintrc`: `^3`

## `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

## `postcss.config.mjs`

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 開発方針

今後はテスト駆動開発（TDD）で実装を進めます。
