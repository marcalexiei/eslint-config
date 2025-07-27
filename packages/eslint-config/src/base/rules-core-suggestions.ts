import type { ESLintRules } from 'eslint/rules';

import type { RemoveIndexSignature } from '../_utils/remove-index-signature.js';
import { PREFER_DESTRUCTURING_RULE_SETTING } from '../_rule-settings/prefer-destructuring.js';
import { NO_EMPTY_FUNCTIONS_RULE_SETTING } from '../_rule-settings/no-empty-function.js';

type RuleName =
  | 'accessor-pairs'
  | 'arrow-body-style'
  | 'block-scoped-var'
  | 'camelcase'
  | 'capitalized-comments'
  | 'class-methods-use-this'
  | 'complexity'
  | 'consistent-return'
  | 'consistent-this'
  | 'curly'
  | 'default-case'
  | 'default-case-last'
  | 'default-param-last'
  | 'dot-notation'
  | 'eqeqeq'
  | 'func-name-matching'
  | 'func-names'
  | 'func-style'
  | 'grouped-accessor-pairs'
  | 'guard-for-in'
  | 'id-denylist'
  | 'id-length'
  | 'id-match'
  | 'init-declarations'
  | 'logical-assignment-operators'
  | 'max-classes-per-file'
  | 'max-depth'
  | 'max-lines'
  | 'max-lines-per-function'
  | 'max-nested-callbacks'
  | 'max-params'
  | 'max-statements'
  | 'new-cap'
  | 'no-alert'
  | 'no-array-constructor'
  | 'no-bitwise'
  | 'no-caller'
  | 'no-case-declarations'
  | 'no-console'
  | 'no-continue'
  | 'no-delete-var'
  | 'no-div-regex'
  | 'no-else-return'
  | 'no-empty'
  | 'no-empty-function'
  | 'no-empty-static-block'
  | 'no-eq-null'
  | 'no-eval'
  | 'no-extend-native'
  | 'no-extra-bind'
  | 'no-extra-boolean-cast'
  | 'no-extra-label'
  | 'no-global-assign'
  | 'no-implicit-coercion'
  | 'no-implicit-globals'
  | 'no-implied-eval'
  | 'no-inline-comments'
  | 'no-invalid-this'
  | 'no-iterator'
  | 'no-label-var'
  | 'no-labels'
  | 'no-lone-blocks'
  | 'no-lonely-if'
  | 'no-loop-func'
  | 'no-magic-numbers'
  | 'no-multi-assign'
  | 'no-multi-str'
  | 'no-negated-condition'
  | 'no-nested-ternary'
  | 'no-new'
  | 'no-new-func'
  | 'no-new-wrappers'
  | 'no-nonoctal-decimal-escape'
  | 'no-object-constructor'
  | 'no-octal'
  | 'no-octal-escape'
  | 'no-param-reassign'
  | 'no-plusplus'
  | 'no-proto'
  | 'no-redeclare'
  | 'no-regex-spaces'
  | 'no-restricted-exports'
  | 'no-restricted-globals'
  | 'no-restricted-imports'
  | 'no-restricted-properties'
  | 'no-restricted-syntax'
  | 'no-return-assign'
  | 'no-script-url'
  | 'no-sequences'
  | 'no-shadow'
  | 'no-shadow-restricted-names'
  | 'no-ternary'
  | 'no-throw-literal'
  | 'no-undef-init'
  | 'no-undefined'
  | 'no-underscore-dangle'
  | 'no-unneeded-ternary'
  | 'no-unused-expressions'
  | 'no-unused-labels'
  | 'no-useless-call'
  | 'no-useless-catch'
  | 'no-useless-computed-key'
  | 'no-useless-concat'
  | 'no-useless-constructor'
  | 'no-useless-escape'
  | 'no-useless-rename'
  | 'no-useless-return'
  | 'no-var'
  | 'no-void'
  | 'no-warning-comments'
  | 'no-with'
  | 'object-shorthand'
  | 'one-var'
  | 'operator-assignment'
  | 'prefer-arrow-callback'
  | 'prefer-const'
  | 'prefer-destructuring'
  | 'prefer-exponentiation-operator'
  | 'prefer-named-capture-group'
  | 'prefer-numeric-literals'
  | 'prefer-object-has-own'
  | 'prefer-object-spread'
  | 'prefer-promise-reject-errors'
  | 'prefer-regex-literals'
  | 'prefer-rest-params'
  | 'prefer-spread'
  | 'prefer-template'
  | 'radix'
  | 'require-await'
  | 'require-unicode-regexp'
  | 'require-yield'
  | 'sort-imports'
  | 'sort-keys'
  | 'sort-vars'
  | 'strict'
  | 'symbol-description'
  | 'vars-on-top'
  | 'yoda';

export const RULES_CORE_SUGGESTION: Pick<
  RemoveIndexSignature<ESLintRules>,
  RuleName
> = {
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  /** handled by {@link TYPESCRIPT_RULES['@typescript-eslint/naming-convention']} */
  // https://eslint.org/docs/latest/rules/camelcase
  camelcase: [
    'error',
    {
      properties: 'never',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false,
    },
  ],

  // https://eslint.org/docs/latest/rules/capitalized-comments
  'capitalized-comments': 'off',

  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': 'error',

  // https://eslint.org/docs/rules/complexity
  complexity: 'off',

  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // https://eslint.org/docs/latest/rules/consistent-this
  'consistent-this': 'off',

  // https://eslint.org/docs/rules/default-case
  curly: ['error', 'all'],

  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no default$' }],

  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': 'error',

  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  /** handled by {@link TYPESCRIPT_RULES['@typescript-eslint/naming-convention']} */
  // https://eslint.org/docs/latest/rules/func-name-matching
  'func-name-matching': 'off',

  // https://eslint.org/docs/latest/rules/func-names
  'func-names': ['error', 'as-needed'],

  // https://eslint.org/docs/latest/rules/func-style
  'func-style': 'off',

  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  /** handled by {@link TYPESCRIPT_RULES['@typescript-eslint/naming-convention']} */
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  /** handled by {@link TYPESCRIPT_RULES['@typescript-eslint/naming-convention']} */
  // https://eslint.org/docs/rules/id-length
  'id-length': 'off',

  /** handled by {@link TYPESCRIPT_RULES['@typescript-eslint/naming-convention']} */
  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // https://eslint.org/docs/latest/rules/init-declarations
  'init-declarations': 'off',

  // https://eslint.org/docs/rules/logical-assignment-operators
  'logical-assignment-operators': 'off',

  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // https://eslint.org/docs/latest/rules/max-depth
  'max-depth': ['error', { max: 4 }],

  // https://eslint.org/docs/latest/rules/max-lines
  'max-lines': 'off',

  // https://eslint.org/docs/latest/rules/max-lines-per-function
  'max-lines-per-function': 'off',

  // https://eslint.org/docs/latest/rules/max-nested-callbacks
  'max-nested-callbacks': ['error', { max: 5 }],

  // https://eslint.org/docs/latest/rules/max-params
  'max-params': 'error',

  // https://eslint.org/docs/latest/rules/max-statements
  'max-statements': 'off',

  // https://eslint.org/docs/latest/rules/new-cap
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      properties: true,
    },
  ],

  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'warn',

  // https://eslint.org/docs/rules/prefer-object-spread
  'no-array-constructor': 'error',

  // https://eslint.org/docs/latest/rules/no-bitwise
  'no-bitwise': 'error',

  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // https://eslint.org/docs/rules/no-console
  'no-console': 'warn',

  // https://eslint.org/docs/latest/rules/no-continue
  'no-continue': 'error',

  // https://eslint.org/docs/latest/rules/no-delete-var
  'no-delete-var': 'error',

  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',

  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': NO_EMPTY_FUNCTIONS_RULE_SETTING,

  // https://eslint.org/docs/rules/no-empty-static-block
  'no-empty-static-block': 'error',

  /** handled by {@link RULES_CORE_SUGGESTION.eqeqeq} rules */
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': ['error', { allow: ['!!'] }],

  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // https://eslint.org/docs/latest/rules/no-inline-comments
  'no-inline-comments': 'off',

  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'error',

  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // https://eslint.org/docs/latest/rules/no-label-var
  'no-label-var': 'error',

  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // https://eslint.org/docs/latest/rules/no-lonely-if
  'no-lonely-if': 'error',

  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': 'off',

  // https://eslint.org/docs/latest/rules/no-multi-assign
  'no-multi-assign': 'error',

  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // https://eslint.org/docs/latest/rules/no-negated-condition
  'no-negated-condition': 'error',

  // https://eslint.org/docs/latest/rules/no-nested-ternary
  'no-nested-ternary': 'error',

  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // https://eslint.org/docs/latest/rules/no-object-constructor
  'no-object-constructor': 'error',

  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  'no-param-reassign': ['error', { props: false }],

  // https://eslint.org/docs/latest/rules/no-plusplus
  'no-plusplus': 'error',

  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // https://eslint.org/docs/rules/no-restricted-exports
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],

  // https://eslint.org/docs/latest/rules/no-restricted-globals
  'no-restricted-globals': 'off',

  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

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

  // https://eslint.org/docs/latest/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for...in loops iterate over the prototype chain. Use Object.keys/values/entries instead.',
    },
  ],

  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // https://eslint.org/docs/latest/rules/no-shadow
  'no-shadow': 'error',

  // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // https://eslint.org/docs/rules/no-ternary
  'no-ternary': 'off',

  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // https://eslint.org/docs/latest/rules/no-undef-init
  'no-undef-init': 'error',

  // https://eslint.org/docs/latest/rules/no-undefined
  'no-undefined': 'off',

  // https://eslint.org/docs/latest/rules/no-underscore-dangle
  'no-underscore-dangle': 'off',

  // https://eslint.org/docs/latest/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': 'error',

  // no need for this since `no-labels` is enabled
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'off',

  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'error',

  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'off',

  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',

  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': 'off',

  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    { ignoreConstructors: false, avoidQuotes: true },
  ],

  // https://eslint.org/docs/latest/rules/one-var
  'one-var': ['error', 'never'],

  // https://eslint.org/docs/latest/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': [
    'error',
    { allowNamedFunctions: false, allowUnboundThis: true },
  ],

  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': PREFER_DESTRUCTURING_RULE_SETTING,

  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'error',

  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': 'error',

  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': 'error',

  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // https://eslint.org/docs/rules/require-await
  'require-await': 'error',

  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // Handled by import-x/order
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': 'off',

  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': 'off',

  // https://eslint.org/docs/rules/sort-vars
  'sort-vars': 'off',

  // https://eslint.org/docs/latest/rules/strict
  strict: ['error', 'never'],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'off',

  // https://eslint.org/docs/rules/yoda
  yoda: 'error',
};
