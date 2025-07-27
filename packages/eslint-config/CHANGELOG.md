# @marcalexiei/eslint-config

## 3.0.0

### Major Changes

- [`9a7c1c7`](https://github.com/marcalexiei/eslint-config/commit/9a7c1c7eac0eadf78fa5a692af0bc060cc710280) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat!: replace `eslint-plugin-react` with `eslint-plugin-react-{x,hooks-extra}`

  Refines rules of react and react-hooks by using <https://eslint-react.xyz>.
  Notable changes:
  - enforce `React` namespace import
  - configure relevant rules from core plugin (<https://eslint-react.xyz/docs/rules/overview#x-rules>)
  - add more check on hooks (<https://eslint-react.xyz/docs/rules/overview#hooks-extra-rules>)

### Minor Changes

- [`93dc467`](https://github.com/marcalexiei/eslint-config/commit/93dc46782db1d5abe04a5fe650cefab40adc5b76) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(base): enable `no-negated-condition`

### Patch Changes

- [`bb93172`](https://github.com/marcalexiei/eslint-config/commit/bb93172ba975631623bde7568a8f17536ff82cff) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(base): disable resolution for commonjs modules

- [`013f172`](https://github.com/marcalexiei/eslint-config/commit/013f172b2db58ac12232d1bad847e64407e936eb) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(base): remove `with` from `no-restricted-syntax`

- [`3362a72`](https://github.com/marcalexiei/eslint-config/commit/3362a72bf080eed4fbfa6accaeae22fdd15ce5e8) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(base): refine label related rules

## 2.1.1

### Patch Changes

- [`842875a`](https://github.com/marcalexiei/eslint-config/commit/842875ab2fc7a85cea6e5080ca8967a959965d1c) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(typescript): disable `no-unsafe-type-assertion`

## 2.1.0

### Minor Changes

- [#45](https://github.com/marcalexiei/eslint-config/pull/45) [`07f14c0`](https://github.com/marcalexiei/eslint-config/commit/07f14c0e7d83c8789bb77050c85d4f9f79e98c99) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(typescript): refine rules config

- [#48](https://github.com/marcalexiei/eslint-config/pull/48) [`ace386a`](https://github.com/marcalexiei/eslint-config/commit/ace386a582b9e8c8a4dfe03adbae4ffcaf8fa274) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(base): restructure rules settings following new eslint structure

## 2.0.3

### Patch Changes

- [`fd9bb14`](https://github.com/marcalexiei/eslint-config/commit/fd9bb144fae4f6686547769064cbb4f35e6bb274) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: consistent `files` minimatch management

## 2.0.2

### Patch Changes

- [`0d04bc0`](https://github.com/marcalexiei/eslint-config/commit/0d04bc0e045c7b156991177675ce1c39fbc736e2) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(vitest): improve `files` match

## 2.0.1

### Patch Changes

- [`06d6e73`](https://github.com/marcalexiei/eslint-config/commit/06d6e7349f9b95f6b70188c278aa7607235851fc) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(stylelistic-issues): update configuration to modern standard

- [`15a3fe7`](https://github.com/marcalexiei/eslint-config/commit/15a3fe76520e5f29bd046bf2d8b26e43d68b43c8) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(typescript): resolve conflicts between `non-nullable-type-assertion`

## 2.0.0

### Major Changes

- [`5d52b45`](https://github.com/marcalexiei/eslint-config/commit/5d52b45676688e284429c278b7085ab172236d36) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: enable naming-convention

- [`328cdbd`](https://github.com/marcalexiei/eslint-config/commit/328cdbdae323aed5365ffb1ffd10511ea7ed6691) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat!: remove node 18 support, add node 24 support

- [#38](https://github.com/marcalexiei/eslint-config/pull/38) [`ef6e870`](https://github.com/marcalexiei/eslint-config/commit/ef6e8707239dce4c1d78efacbd86cb66b09f32a5) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(base)!: linterOptions.reportUnusedDisableDirectives should be an error instead of warning

- [#29](https://github.com/marcalexiei/eslint-config/pull/29) [`74d9e92`](https://github.com/marcalexiei/eslint-config/commit/74d9e92389408f8a6d3e1b37f8b5a5b46784b624) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat!: support eslint-plugin-import-x@4 and eslint-import-resolver-typescript@4

### Minor Changes

- [#35](https://github.com/marcalexiei/eslint-config/pull/35) [`485ee80`](https://github.com/marcalexiei/eslint-config/commit/485ee800ba14241d14d952cda29fb068e7118d67) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: add vitest export

### Patch Changes

- [#41](https://github.com/marcalexiei/eslint-config/pull/41) [`c803172`](https://github.com/marcalexiei/eslint-config/commit/c803172280f6a8c74c4f4ef1df9022d7bd74841b) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(import): avoid empty lines inside groups

## 1.0.0

### Major Changes

- [`2b31b27`](https://github.com/marcalexiei/eslint-config/commit/2b31b276bf4015e87a6553e45875e626d08d39a4) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: Initial release
