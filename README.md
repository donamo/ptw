# ptw

Egyszerű TypeScript 7 hello world könyvtár.

## Telepítés

```sh
npm install ptw
```

## Használat

```ts
import { hello } from "ptw";

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
4. GitHub-on hozz létre egy Release-t a tag-ből — a `Publish` workflow kiadja npm-re.

## Licenc

MIT
