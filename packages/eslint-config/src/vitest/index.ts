import type { Linter, ESLint } from 'eslint';
import eslintPluginVitest from '@vitest/eslint-plugin';

import type { PluginRulesRemapper } from '../_utils/plugin-rules-mapper.js';
import {
  ALL_EXTENSIONS,
  createExtensionMinimatch,
} from '../_utils/extensions.js';

type PluginRules = Partial<(typeof eslintPluginVitest)['rules']>;
type PluginRulesConfig = PluginRulesRemapper<'vitest', PluginRules>;

const vitestConfig: Linter.Config<PluginRulesConfig> = {
  name: '@marcalexiei/eslint-config/vitest',
  files: [`**/*.{test,spec}.${createExtensionMinimatch(ALL_EXTENSIONS)}`],
  plugins: { vitest: eslintPluginVitest as unknown as ESLint.Plugin },
  rules: {
    ...eslintPluginVitest.configs.recommended.rules,
    'vitest/consistent-test-filename': [
      'error',
      {
        pattern: '.*\\.spec\\.[tj]sx?$',
        allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
      },
    ],
    'vitest/consistent-test-it': 'error',
    'vitest/consistent-vitest-vi': 'error',
    'vitest/max-nested-describe': ['error', { max: 2 }],
    'vitest/max-expects': ['error', { max: 5 }],
    'vitest/prefer-importing-vitest-globals': 'error',
    'vitest/require-mock-type-parameters': 'error',
  },
};
export default vitestConfig;
