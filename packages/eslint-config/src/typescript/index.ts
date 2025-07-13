import tseslint from 'typescript-eslint';
import type { Linter, ESLint } from 'eslint';

import {
  createExtensionMinimatch,
  getTSExtensions,
  getTSXExtensions,
} from '../_utils/extensions.js';

import { TYPESCRIPT_RULES } from './rules.js';

const typescriptConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/typescript',
  files: [
    `**/*.${createExtensionMinimatch([
      ...getTSExtensions({ mode: 'main' }),
      ...getTSXExtensions(),
    ])}`,
  ],
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
