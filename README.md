# @donamo/ptw

Egyszerű TypeScript 7 hello world könyvtár.

## Telepítés

```sh
npm install @donamo/ptw
```

## Használat

```ts
import { hello } from "@donamo/ptw";

console.log(hello());          // Hello, World!
console.log(hello("Ambrus"));  // Hello, Ambrus!
```

## Fejlesztés

```sh
npm install
npm run typecheck   # típusellenőrzés (tsc 7, natív)
npm test            # fordítás + node:test
npm run build       # dist/ generálása
```

## Kiadás

1. Hozz létre egy GitHub repót és told fel a kódot.
2. Állíts be egy `NPM_TOKEN` secretet a repóban (npmjs.com → Access Tokens → Automation).
3. Emeld a verziót: `npm version patch` → `git push --follow-tags`.
4. GitHub-on hozz létre egy Release-t a tag-ből — a `Publish` workflow előkészíti (stage-eli) a kiadást npm-en.
5. Hagyd jóvá 2FA-val: `npm stage list @donamo/ptw`, majd `npm stage approve <stage-id>` (vagy az npmjs.com-on).

## Licenc

MIT
