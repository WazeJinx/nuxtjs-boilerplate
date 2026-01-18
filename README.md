# NuxtJS Boilerplate
startup some projects fast
- responsive sidebar
- icon component using ```bash :icon='iconLibaryHere'``` 
- refer [this website](https://icon-sets.iconify.design/) for icons to use
- got example for proxying api requests too
- pwa setup, just need to change name and assets

## dark mode
using tailwind class theming
- add color to nuxt config under tailwind
- use like normal ```border-className``` or ```bg-className```
- for dark, just add ```dark:border-className``` or ```dark:bg-className```

## pwa
simple pwa setup
- refer nuxt config, pwa section. from there change what is needed
- for desktop install, in address bar will show download icon in right side
    - ```inspect/application/manifest``` to check if PWA is working
    - if prompt not showing, enable dev mode in ```nuxtconfig pwa section```
- for mobile install prompt, check ``` layout/default.vue```
    - uncomment pwa related lines in ``` onMounted() ```
    - in mobile view, the header will display download icon
    - icon will disappear if user open in ```web app mode```


## issues
- if got dev errors like post/css or some stupid unrelated shit, test in incognito first
    - if incognito works fine, clear all cache in browser
    - if incognito got error also, idk bro
- hydration issues - server/client rendering issues, not an expert ask chatgpt

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

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
pnpm dev

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
pnpm build

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
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
