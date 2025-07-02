import js from '@eslint/js';

/** @type {Array<import('eslint').Linter.Config>} */
export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
