import type { ESLint, Linter } from 'eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import {
  ALL_EXTENSIONS,
  getTSExtensions,
  getTSXExtensions,
} from './utils/extensions.js';
import { BEST_PRACTICES_RULES } from './rules/best-practices.js';
import { ERROR_RULES } from './rules/errors.js';
import { ES6_RULES } from './rules/es6.js';
import { IMPORT_RULES } from './rules/import.js';
import { STRICT_RULES } from './rules/strict.js';
import { STYLISTIC_ISSUES_RULES } from './rules/stylelistic-issues.js';
import { VARIABLES_RULES } from './rules/variables.js';

const baseConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/base',
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
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
    /** @see https://github.com/un-ts/eslint-plugin-import-x/releases/tag/v4.6.0 */
    'import-x/resolver-next': [createTypeScriptImportResolver()],
    'import-x/extensions': ALL_EXTENSIONS,
    'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import-x/parsers': {
      '@typescript-eslint/parser': [
        ...getTSExtensions({ mode: 'main' }),
        ...getTSXExtensions(),
      ],
    },
  },
  rules: {
    ...BEST_PRACTICES_RULES,
    ...ERROR_RULES,
    ...ES6_RULES,
    ...IMPORT_RULES,
    ...STRICT_RULES,
    ...STYLISTIC_ISSUES_RULES,
    ...VARIABLES_RULES,
  },
};

export default baseConfig;
