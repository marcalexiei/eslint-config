import type { Linter } from 'eslint';

import type { CoreRulesPicker } from '../_utils/core-rules-picker.js';

type RuleName =
  | 'array-callback-return'
  | 'constructor-super'
  | 'for-direction'
  | 'getter-return'
  | 'no-async-promise-executor'
  | 'no-await-in-loop'
  | 'no-class-assign'
  | 'no-compare-neg-zero'
  | 'no-cond-assign'
  | 'no-const-assign'
  | 'no-constant-binary-expression'
  | 'no-constant-condition'
  | 'no-constructor-return'
  | 'no-control-regex'
  | 'no-debugger'
  | 'no-dupe-args'
  | 'no-dupe-class-members'
  | 'no-dupe-else-if'
  | 'no-dupe-keys'
  | 'no-duplicate-case'
  | 'no-duplicate-imports'
  | 'no-empty-character-class'
  | 'no-empty-pattern'
  | 'no-ex-assign'
  | 'no-fallthrough'
  | 'no-func-assign'
  | 'no-import-assign'
  | 'no-inner-declarations'
  | 'no-invalid-regexp'
  | 'no-irregular-whitespace'
  | 'no-loss-of-precision'
  | 'no-misleading-character-class'
  | 'no-new-native-nonconstructor'
  | 'no-obj-calls'
  | 'no-promise-executor-return'
  | 'no-prototype-builtins'
  | 'no-self-assign'
  | 'no-self-compare'
  | 'no-setter-return'
  | 'no-sparse-arrays'
  | 'no-template-curly-in-string'
  | 'no-this-before-super'
  | 'no-unassigned-vars'
  | 'no-undef'
  | 'no-unexpected-multiline'
  | 'no-unmodified-loop-condition'
  | 'no-unreachable'
  | 'no-unreachable-loop'
  | 'no-unsafe-finally'
  | 'no-unsafe-negation'
  | 'no-unsafe-optional-chaining'
  | 'no-unused-private-class-members'
  | 'no-unused-vars'
  | 'no-use-before-define'
  | 'no-useless-assignment'
  | 'no-useless-backreference'
  | 'require-atomic-updates'
  | 'use-isnan'
  | 'valid-typeof';

export const RULES_CORE_PROBLEMS: Linter.RulesRecord = {
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': [
    'error',
    { allowImplicit: true, checkForEach: false, allowVoid: false },
  ],

  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',

  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // https://eslint.org/docs/rules/no-constant-binary-expression
  'no-constant-binary-expression': 'error',

  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'warn',

  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',

  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',

  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',

  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',

  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',

  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',

  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',

  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',

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

  // https://eslint.org/docs/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor': 'error',

  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',

  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': 'error',

  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',

  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',

  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // https://eslint.org/docs/latest/rules/no-unassigned-vars
  'no-unassigned-vars': 'error',

  // https://eslint.org/docs/latest/rules/no-undef
  'no-undef': 'error',

  // https://eslint.org/docs/rules/'no-unexpected-multiline'
  'no-unexpected-multiline': 'off',

  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'error',

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

  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': 'error',

  // https://eslint.org/docs/rules/
  'no-use-before-define': 'error',

  // https://eslint.org/docs/rules/no-useless-assignment
  'no-useless-assignment': 'error',

  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'error',

  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
} satisfies CoreRulesPicker<RuleName>;
