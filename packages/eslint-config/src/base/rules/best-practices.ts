import type { ESLintRules } from 'eslint/rules';

export const BEST_PRACTICES_RULES: Partial<ESLintRules> = {
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': [
    'error',
    { allowImplicit: true, checkForEach: false, allowVoid: false },
  ],

  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // https://eslint.org/docs/rules/complexity
  complexity: ['off', 20],

  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': ['error', { exceptMethods: [] }],

  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no default$' }],

  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: true }],

  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'warn',

  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',

  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': ['error', { allow: ['!!'] }],

  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'error',

  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  'no-param-reassign': ['error', { props: false }],

  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],

  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': ['error'],

  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': ['error'],

  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',

  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'off',

  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // https://eslint.org/docs/rules/no-useless-assignment
  'no-useless-assignment': 'error',

  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',

  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': [
    'off',
    { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
  ],

  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': 'off',

  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'off',

  // https://eslint.org/docs/rules/vars-on-top
  'wrap-iife': 'off',

  // https://eslint.org/docs/rules/yoda
  yoda: 'error',
};
