import type { ESLint, Linter } from 'eslint';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import eslintPluginImportX from 'eslint-plugin-import-x';

import {
  ALL_EXTENSIONS,
  getTSExtensions,
  getTSXExtensions,
} from '../_utils/extensions.js';

import { RULES_CORE_LAYOUT } from './rules-core-layout.js';
import { RULES_CORE_PROBLEMS } from './rules-core-problems.js';
import { RULES_CORE_SUGGESTION } from './rules-core-suggestions.js';
import { RULES_PLUGIN_IMPORT } from './rules-plugin-import.js';

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
    ...RULES_CORE_PROBLEMS,
    ...RULES_CORE_SUGGESTION,
    ...RULES_CORE_LAYOUT,
    ...RULES_PLUGIN_IMPORT,
  },
};

export default baseConfig;
