import type { ESLint, Linter } from 'eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';

import {
  ALL_EXTENSIONS,
  TSX_EXTENSIONS,
  TS_EXTENSIONS,
} from './utils/extensions.js';
import { BEST_PRACTICES_RULES } from './rules/best-practices.js';
import { ERROR_RULES } from './rules/errors.js';
import { ES6_RULES } from './rules/es6.js';
import { IMPORT_RULES } from './rules/import.js';
import { STRICT_RULES } from './rules/strict.js';

const baseConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/base',
  languageOptions: {
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  plugins: {
    'import-x': eslintPluginImportX as unknown as ESLint.Plugin,
  },
  settings: {
    'import-x/extensions': ALL_EXTENSIONS,
    'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import-x/parsers': {
      '@typescript-eslint/parser': [...TS_EXTENSIONS, ...TSX_EXTENSIONS],
    },
    'import-x/resolver': {
      typescript: true,
    },
  },
  rules: {
    ...BEST_PRACTICES_RULES,
    ...ERROR_RULES,
    ...IMPORT_RULES,
    ...ES6_RULES,
    ...STRICT_RULES,
  },
};

export default baseConfig;
