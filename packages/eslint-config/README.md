# `@marcalexiei/eslint-config`

Provide ESLint sharable configurations.
The following presets are available:

- `base` → `"@marcalexiei/eslint-config/base"`
- `typescript` → `"@marcalexiei/eslint-config/typescript"`
- `react` → `"@marcalexiei/eslint-config/react"`

## Install

### Typescript

> [!WARNING]
> Be sure to enable the following `tsconfig` options:
>
> - `strict` - replace `typedef` rule and allows type-checking rule to work as expected
> - `noImplicitAny` - replace `typedef` rule
> - `noImplicitReturns` - replace `typedef` and `consistent-return` rules
> - `allowUnreachableCode` - replace `no-unreachable` rule
>
> ```jsonc
> // tsconfig.json
> {
>   // ...
>   "compilerOptions": {
>     // ...
>     "strict": true,
>     "noImplicitAny": true,
>     "noImplicitReturns": true,
>     "allowUnreachableCode": false,
>   },
> }
> ```
>
> If you don't do this some rules might not work as expected

---

> [!TIP]
> Consider to enable also the following options:
>
> ```jsonc
> // tsconfig.json
> {
>   // ...
>   "compilerOptions": {
>     // ...
>     "noImplicitThis": true,
>     "noImplicitOverride": true,
>   },
> }
> ```

**Install instructions:**

```shell
npm i --save-dev eslint @marcalexiei/eslint-config typescript typescript-eslint eslint-plugin-import-x eslint-import-resolver-typescript
```

**Configuration:**

```js
// eslint.config.js

import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';

/** @type {import('eslint').Linter.Config} */
export default [
  base,
  typescript,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
```

### Typescript + React

> [!WARNING]
> Refer to "Typescript" section for information about `tsconfig.json`

**Install instructions:**

```shell
npm i --save-dev eslint @marcalexiei/eslint-config typescript typescript-eslint eslint-plugin-import-x eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks
```

**Configuration:**

```js
// eslint.config.js

import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';
import react from '@marcalexiei/eslint-config/react';

/** @type {import('eslint').Linter.Config} */
export default [
  base,
  typescript,
  ...react,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
```
