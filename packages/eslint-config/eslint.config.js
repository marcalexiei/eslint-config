import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig(
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
);
