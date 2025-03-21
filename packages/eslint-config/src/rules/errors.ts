import type { ESLintRules } from 'eslint/rules';

export const ERROR_RULES: Partial<ESLintRules> = {
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // https://eslint.org/docs/rules/no-console
  'no-console': 'warn',

  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'warn',

  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',

  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',

  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',

  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',

  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',

  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',

  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',

  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'error',

  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // https://eslint.org/docs/rules/no-inner-declarations
  'no-inner-declarations': 'error',

  // https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': 'error',

  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': 'error',

  // https://eslint.org/docs/rules/no-loss-of-precision
  'no-loss-of-precision': 'error',

  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',

  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',

  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'error',

  // https://eslint.org/docs/rules/no-unreachable-loop
  'no-unreachable-loop': ['error'],

  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',

  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': [
    'error',
    { disallowArithmeticOperators: true },
  ],

  // https://eslint.org/docs/rules/no-unused-private-class-members
  'no-unused-private-class-members': 'off',

  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
};
