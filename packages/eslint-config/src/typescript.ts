import tseslint from 'typescript-eslint';
import type { Linter, ESLint } from 'eslint';

import { TYPESCRIPT_RULES } from './rules/typescript.js';

const typescriptConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/typescript',
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: tseslint.parser as Linter.Parser,
    parserOptions: { sourceType: 'module' },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin as ESLint.Plugin,
  },
  rules: { ...TYPESCRIPT_RULES },
};

export default typescriptConfig;
