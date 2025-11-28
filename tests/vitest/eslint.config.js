import { defineConfig } from 'eslint/config';
import base from '@marcalexiei/eslint-config/base';
import typescript from '@marcalexiei/eslint-config/typescript';
import vitest from '@marcalexiei/eslint-config/vitest';

export default defineConfig(
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
);
