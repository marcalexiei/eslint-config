import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';
import vitest from '@marcalexiei/eslint-config/vitest';

/** @type {import('eslint').Linter.Config} */
export default [
  base,
  typescript,
  {
    ...vitest,
    files: ['fixtures/**'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
