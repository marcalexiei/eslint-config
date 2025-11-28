import type { Linter } from 'eslint';

export const VITEST_RULES: Linter.RulesRecord = {
  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename
  'vitest/consistent-test-filename': [
    'error',
    {
      pattern: '.*\\.spec\\.[tj]sx?$',
      allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
    },
  ],

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it
  'vitest/consistent-test-it': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-vitest-vi
  'vitest/consistent-vitest-vi': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect
  'vitest/expect-expect': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects
  'vitest/max-expects': ['error', { max: 5 }],

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe
  'vitest/max-nested-describe': ['error', { max: 2 }],

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests
  'vitest/no-commented-out-tests': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title
  'vitest/no-identical-title': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test
  'vitest/no-import-node-test': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-importing-vitest-globals
  'vitest/prefer-importing-vitest-globals': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots
  'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters
  'vitest/require-mock-type-parameters': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback
  'vitest/valid-describe-callback': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect
  'vitest/valid-expect': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title
  'vitest/valid-title': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/hoisted-apis-on-top
  'vitest/hoisted-apis-on-top': 'error',
};
