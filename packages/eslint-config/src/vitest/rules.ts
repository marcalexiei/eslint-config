import type { Linter } from 'eslint';
import type eslintPluginVitest from '@vitest/eslint-plugin';

import type { PluginRulesRemapper } from '../_utils/plugin-rules-mapper.js';

type PluginRules = Partial<(typeof eslintPluginVitest)['rules']>;
type PluginRulesConfig = PluginRulesRemapper<'vitest', PluginRules>;

export const VITEST_RULES: Linter.RulesRecord = {
  'vitest/consistent-test-filename': [
    'error',
    {
      pattern: '.*\\.spec\\.[tj]sx?$',
      allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
    },
  ],
  'vitest/consistent-test-it': 'error',
  'vitest/consistent-vitest-vi': 'error',
  'vitest/expect-expect': 'error',
  'vitest/max-expects': ['error', { max: 5 }],
  'vitest/max-nested-describe': ['error', { max: 2 }],
  'vitest/no-commented-out-tests': 'error',
  'vitest/no-identical-title': 'error',
  'vitest/no-import-node-test': 'error',
  'vitest/prefer-importing-vitest-globals': 'error',
  'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
  'vitest/require-mock-type-parameters': 'error',
  'vitest/valid-describe-callback': 'error',
  'vitest/valid-expect': 'error',
  'vitest/valid-title': 'error',
  'vitest/hoisted-apis-on-top': 'error',
} satisfies PluginRulesConfig;
