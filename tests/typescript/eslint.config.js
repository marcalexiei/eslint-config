import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  base,
  typescript,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
]);
