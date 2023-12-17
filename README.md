# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```


## Benefit in Nuxtjs
- 內建 Dev Tool 協助開發
- 內建具備 `vite-plugin-pages`, `vite-plugin-vue-layouts`, `unplugin-vue-router`, `unplugin-vue-components` 等套件功能
- 提供常用元件以及組合函式 `NuxtPage`, `NuxtLink`, `NuxtLayout`, `NuxtPicture` 等，詳細請見[官方文件](https://nuxt.com/docs/api/components/)
- 使用已包裝過的 `@nuxtjs/tailwindcss`，並藉由 `tailwind-config-viewer` 提供視覺化文件供開發使用
- 除了 components 自動載入，另外 Vue3 的函式，如；`ref`, `computed`,`lifecycle hooks` 以及 `/composable` 目錄內的組合函式也都自動載入
- 完善的 error handle 機制
- Layout 實作方式為一般 component ，不同於 `vite-plugin-vue-layouts` 修改路由的方式處理 
  


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
