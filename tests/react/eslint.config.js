import base from '@marcalexiei/eslint-config/base';
import react from '@marcalexiei/eslint-config/react';
import typescript from '@marcalexiei/eslint-config/typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig(base, typescript, react, {
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
    },
  },
});
