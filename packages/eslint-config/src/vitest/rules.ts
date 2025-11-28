import type { Linter } from 'eslint';

/**
 * Following rules are not configured:
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-importing-vitest-globals.md (prefer explicit imports)
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
 * - all padding rules
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-times.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-describe-function-title.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md (conflicts with prefer-strict-boolean-matchers)
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md (conflicts with prefer-strict-boolean-matchers)
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
 * - https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
 */
export const VITEST_RULES: Linter.RulesRecord = {
  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-each-for
  'vitest/consistent-each-for': [
    'error',
    {
      test: 'each',
      it: 'each',
      describe: 'each',
      suite: 'each',
    },
  ],

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

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/hoisted-apis-on-top
  'vitest/hoisted-apis-on-top': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects
  'vitest/max-expects': ['error', { max: 5 }],

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe
  'vitest/max-nested-describe': ['error', { max: 2 }],

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests
  'vitest/no-commented-out-tests': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect
  'vitest/no-conditional-expect': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test
  'vitest/no-conditional-in-test': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests
  'vitest/no-conditional-tests': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests
  'vitest/no-disabled-tests': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks
  'vitest/no-duplicate-hooks': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks
  'vitest/no-focused-tests': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title
  'vitest/no-identical-title': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test
  'vitest/no-import-node-test': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots
  'vitest/no-interpolation-in-snapshots': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import
  'vitest/no-mocks-import': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect
  'vitest/no-standalone-expect': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-exactly-once-with
  'vitest/prefer-called-exactly-once-with': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher
  'vitest/prefer-comparison-matcher': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves
  'vitest/prefer-expect-resolves': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-type-of
  'vitest/prefer-expect-type-of': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order
  'vitest/prefer-hooks-in-order': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
  'vitest/prefer-hooks-on-top': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
  'vitest/prefer-import-in-mock': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-importing-vitest-globals
  'vitest/prefer-importing-vitest-globals': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand
  'vitest/prefer-mock-promise-shorthand': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on
  'vitest/prefer-spy-on': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-boolean-matchers
  'vitest/prefer-strict-boolean-matchers': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain
  'vitest/prefer-to-contain': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length
  'vitest/prefer-to-have-length': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md
  'vitest/prefer-vi-mocked': 'warn',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots
  'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters
  'vitest/require-mock-type-parameters': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message
  'vitest/require-to-throw-message': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback
  'vitest/valid-describe-callback': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect-in-promise
  'vitest/valid-expect-in-promise': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect
  'vitest/valid-expect': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title
  'vitest/valid-title': 'error',

  // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/warn-todo
  'vitest/warn-todo': 'warn',
};
