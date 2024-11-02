import js from '@eslint/js';

/** @type {Array<import('eslint').Linter.Config>} */
export default [
  {
    ignores: ['./test/**/*'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
