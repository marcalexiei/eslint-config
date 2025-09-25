import tseslint from 'typescript-eslint';
import type { Linter } from 'eslint';

import { ALL_TS_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

import { TYPESCRIPT_RULES } from './rules.js';

const typescriptConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/typescript',
  files: [ALL_TS_EXTENSIONS_MINIMATCH],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: { sourceType: 'module' },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: { ...TYPESCRIPT_RULES },
};

export default typescriptConfig;
