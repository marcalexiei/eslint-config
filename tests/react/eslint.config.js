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
