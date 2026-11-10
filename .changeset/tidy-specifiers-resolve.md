---
'@marcalexiei/eslint-config': major
---

feat(import)!: support `eslint-plugin-import-x@4.18`

- `import-x/extensions` now requires `.js`, `.mjs` and `.cjs` extensions on relative imports, so ESM specifiers like `./foo.js` resolving to `foo.ts` are allowed. Extensionless relative imports of JavaScript files are now reported.
- `import-x/extensions` sets `ignorePackages: true`: package subpaths such as `pkg/sub` are not checked
- Update peer dependency requirement: `eslint-plugin-import-x` ➡️ `^4.18.1`
- Turn off the new `import-x/avoid-*` rules
