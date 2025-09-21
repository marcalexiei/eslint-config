# `@marcalexiei/eslint-config`

[![CI][CIBadge]][CIURL]
[![Code style: prettier][CodeStyleBadge]][CodeStyleURL]
[![Lint: eslint][lintBadge]][lintURL]
[![npm version][npmVersionBadge]][npmVersionURL]
[![issues][issuesBadge]][issuesURL]

[CIBadge]: https://img.shields.io/github/actions/workflow/status/marcalexiei/eslint-config/ci.yml?style=for-the-badge&logo=github&event=push&label=CI
[CIURL]: https://github.com/marcalexiei/eslint-config/actions/workflows/ci.yml/badge.svg
[CodeStyleBadge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier
[CodeStyleURL]: https://prettier.io
[npmVersionBadge]: https://img.shields.io/npm/v/@marcalexiei/eslint-config.svg?style=for-the-badge&logo=npm
[lintBadge]: https://img.shields.io/badge/lint-eslint-3A33D1?logo=eslint&style=for-the-badge
[lintURL]: https://eslint.org
[npmVersionURL]: https://www.npmjs.com/package/@marcalexiei/eslint-config
[issuesBadge]: https://img.shields.io/github/issues/marcalexiei/eslint-config.svg?style=for-the-badge
[issuesURL]: https://github.com/marcalexiei/eslint-config/issues

Provide ESLint sharable configurations.
The following presets are available:

- `base` → `"@marcalexiei/eslint-config/base"`
- `typescript` → `"@marcalexiei/eslint-config/typescript"`
- `react` → `"@marcalexiei/eslint-config/react"`
- `react-hooks` → `"@marcalexiei/eslint-config/react-hooks"`
- `vitest` → `"@marcalexiei/eslint-config/vitest"`

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
import { defineConfig } from 'eslint/config';
import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';

export default defineConfig(base, typescript, {
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
    },
  },
});
```

### Typescript + React

> [!WARNING]
> Refer to "Typescript" section for information about `tsconfig.json`

**Install instructions:**

```shell
npm i --save-dev eslint @marcalexiei/eslint-config typescript typescript-eslint eslint-plugin-import-x eslint-import-resolver-typescript eslint-plugin-react-x eslint-plugin-react-hooks eslint-plugin-react-hooks-extra
```

**Configuration:**

```js
// eslint.config.js
import { defineConfig } from 'eslint/config';
import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';
import react from '@marcalexiei/eslint-config/react';
import reactHooks from '@marcalexiei/eslint-config/react-hooks';

export default defineConfig(base, typescript, react, reactHooks, {
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
    },
  },
});
```
