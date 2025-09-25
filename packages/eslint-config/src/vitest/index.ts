import type { Linter, ESLint } from 'eslint';
import eslintPluginVitest from '@vitest/eslint-plugin';

import {
  ALL_EXTENSIONS,
  createExtensionMinimatch,
} from '../_utils/extensions.js';

import { VITEST_RULES } from './rules.js';

const vitestConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/vitest',
  files: [`**/*.{test,spec}.${createExtensionMinimatch(ALL_EXTENSIONS)}`],
  plugins: { vitest: eslintPluginVitest as unknown as ESLint.Plugin },
  rules: VITEST_RULES,
};

export default vitestConfig;
