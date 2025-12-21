# @marcalexiei/eslint-config

## 5.0.0

### Major Changes

- [#125](https://github.com/marcalexiei/eslint-config/pull/125) [`6ea03f3`](https://github.com/marcalexiei/eslint-config/commit/6ea03f3908fc31f94b0075845e4f1a5c8e66071a) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(import)!: enable `alphabetize`

- [#121](https://github.com/marcalexiei/eslint-config/pull/121) [`42239a5`](https://github.com/marcalexiei/eslint-config/commit/42239a52445a9556efdeccb23f76bef32f18fa23) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(peerDeps)!: require `eslint` ^9.39.0 and `typescript-eslint` ^8.48

- [#115](https://github.com/marcalexiei/eslint-config/pull/115) [`38bf0eb`](https://github.com/marcalexiei/eslint-config/commit/38bf0eb5b70f8ff19711bbec990bbd9ba01816a1) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(vitest)!: enable additional rules
  - `consistent-each-for`
  - `no-conditional-expect`
  - `no-conditional-in-test`
  - `no-conditional-tests`
  - `no-duplicate-hooks`
  - `no-focused-tests`
  - `no-interpolation-in-snapshots`
  - `no-mocks-import`
  - `no-standalone-expect`
  - `prefer-called-exactly-once-with`
  - `prefer-comparison-matcher`
  - `prefer-expect-resolves`
  - `prefer-expect-type-of`
  - `prefer-hooks-in-order`
  - `prefer-hooks-on-top`
  - `prefer-import-in-mock`
  - `prefer-mock-promise-shorthand`
  - `prefer-spy-on`
  - `prefer-strict-boolean-matchers`
  - `prefer-to-contain`
  - `prefer-to-have-length`
  - `prefer-todo`
  - `prefer-vi-mocked`
  - `require-to-throw-message`
  - `valid-expect-in-promise`
  - `warn-todo`

### Minor Changes

- [#133](https://github.com/marcalexiei/eslint-config/pull/133) [`3da0bc3`](https://github.com/marcalexiei/eslint-config/commit/3da0bc3900517c5687addc6a91f6529b242401e0) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(react-hooks): support `eslint-plugin-react-hooks` v7

- [#117](https://github.com/marcalexiei/eslint-config/pull/117) [`9d6e7bc`](https://github.com/marcalexiei/eslint-config/commit/9d6e7bc2cdd91e2939b1b6be93d084da821a7282) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(base & typescript): enable `no-unused-private-class-members` rule

- [#130](https://github.com/marcalexiei/eslint-config/pull/130) [`bd182ae`](https://github.com/marcalexiei/eslint-config/commit/bd182aeb74e9bc7f507e2a30377c54e4fc5894c7) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(typescript): disable `@typescript-eslint/no-useless-default-assignment` due to bugs, might be enabled in the future

### Patch Changes

- [#109](https://github.com/marcalexiei/eslint-config/pull/109) [`fbb7dd7`](https://github.com/marcalexiei/eslint-config/commit/fbb7dd721d59fe2f2c603f7c144e08773e4a1544) Thanks [@marcalexiei](https://github.com/marcalexiei)! - docs: refine "Typescript + React" caution message

## 4.2.0

### Minor Changes

- [#106](https://github.com/marcalexiei/eslint-config/pull/106) [`10b7e90`](https://github.com/marcalexiei/eslint-config/commit/10b7e90156411de107dd85ee5806af581a869068) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(base): enable `preserve-caught-error` rule

- [#104](https://github.com/marcalexiei/eslint-config/pull/104) [`f568aa5`](https://github.com/marcalexiei/eslint-config/commit/f568aa54d527f453f9aaa1c98c0cd8fa72f07777) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(typescript): enable `no-floating-promises`

## 4.1.0

### Minor Changes

- [#98](https://github.com/marcalexiei/eslint-config/pull/98) [`7d75081`](https://github.com/marcalexiei/eslint-config/commit/7d750810b3d65bb5dbc32eaae412ddc8fb26c3f3) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(import): add `knip` configs to `import-x/no-extraneous-dependencies` `devDependencies` option

## 4.0.0

### Major Changes

- [#90](https://github.com/marcalexiei/eslint-config/pull/90) [`56649c5`](https://github.com/marcalexiei/eslint-config/commit/56649c5a23d39ebc7507a066715a994285428cdc) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(react)!: support eslint-plugin-react-(x|hooks-extra) 2

### Minor Changes

- [#92](https://github.com/marcalexiei/eslint-config/pull/92) [`838c122`](https://github.com/marcalexiei/eslint-config/commit/838c122c5d9b49de8883bacaed0f280c11fbc503) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(import): add `.eslint-doc-generatorrc.js` to `import-x/no-extraneous-dependencies` `devDependencies` option

## 3.2.0

### Minor Changes

- [#87](https://github.com/marcalexiei/eslint-config/pull/87) [`4f43376`](https://github.com/marcalexiei/eslint-config/commit/4f4337629e5e8497cf92fca43fe8751e564b892a) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat(import): refine `import-x/no-extraneous-dependencies` files for `devDependencies` settings

### Patch Changes

- [#82](https://github.com/marcalexiei/eslint-config/pull/82) [`a04a38c`](https://github.com/marcalexiei/eslint-config/commit/a04a38cd14c47b92831b1cb93e39c106104834d9) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(react): react configs should work only on tsx like files, using js files throws an error

- [#86](https://github.com/marcalexiei/eslint-config/pull/86) [`1b4bdbd`](https://github.com/marcalexiei/eslint-config/commit/1b4bdbdcf129c432809cc458bff7eb531f4ba285) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: avoid exposing internal rules strict type

## 3.1.1

### Patch Changes

- [#77](https://github.com/marcalexiei/eslint-config/pull/77) [`58b9106`](https://github.com/marcalexiei/eslint-config/commit/58b9106c2e6db4b1585e4dfbd2d4aaa0ed81b0e8) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(react): improve rule configuration

## 3.1.0

### Minor Changes

- [#67](https://github.com/marcalexiei/eslint-config/pull/67) [`48f3aa4`](https://github.com/marcalexiei/eslint-config/commit/48f3aa4f14acf804959556f6ead5880b5307e804) Thanks [@marcalexiei](https://github.com/marcalexiei)! - docs: use `defineConfig` from `eslint` in examples and code snippets

### Patch Changes

- [#69](https://github.com/marcalexiei/eslint-config/pull/69) [`40e17f6`](https://github.com/marcalexiei/eslint-config/commit/40e17f6331d67d2af82bcf01cffdcf2192073bfb) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix(react): use consistent type imports

## 3.0.1

### Patch Changes

- [`7ecf618`](https://github.com/marcalexiei/eslint-config/commit/7ecf618f278505e7a0574a6bab5fbc0451f55b23) Thanks [@marcalexiei](https://github.com/marcalexiei)! - docs(README): update badge style and add lint badge

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
