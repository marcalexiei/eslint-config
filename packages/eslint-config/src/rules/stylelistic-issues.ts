import type { ESLintRules } from 'eslint/rules';

export const STYLISTIC_ISSUES_RULES: Partial<ESLintRules> = {
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

  // https://eslint.org/docs/latest/rules/consistent-this
  'consistent-this': 'off',

  // https://eslint.org/docs/latest/rules/func-names
  'func-names': ['error', 'as-needed'],

  // https://eslint.org/docs/latest/rules/func-name-matching
  'func-name-matching': 'off',

  // https://eslint.org/docs/latest/rules/func-style
  'func-style': 'off',

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

  // https://eslint.org/docs/rules/prefer-object-spread
  'no-array-constructor': 'error',

  // https://eslint.org/docs/latest/rules/no-bitwise
  'no-bitwise': 'error',

  // https://eslint.org/docs/latest/rules/no-continue
  'no-continue': 'error',

  // https://eslint.org/docs/latest/rules/no-inline-comments
  'no-inline-comments': 'off',

  // https://eslint.org/docs/latest/rules/no-lonely-if
  'no-lonely-if': 'error',

  // https://eslint.org/docs/latest/rules/no-multi-assign
  'no-multi-assign': 'error',

  // https://eslint.org/docs/latest/rules/no-negated-condition
  'no-negated-condition': 'off',

  // https://eslint.org/docs/latest/rules/no-nested-ternary
  'no-nested-ternary': 'off',

  // https://eslint.org/docs/latest/rules/no-object-constructor
  'no-object-constructor': 'error',

  // https://eslint.org/docs/latest/rules/no-plusplus
  'no-plusplus': 'error',

  // https://eslint.org/docs/latest/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // https://eslint.org/docs/latest/rules/no-underscore-dangle
  'no-underscore-dangle': 'off',

  // https://eslint.org/docs/latest/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // https://eslint.org/docs/latest/rules/one-var
  'one-var': ['error', 'never'],

  // https://eslint.org/docs/latest/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // https://eslint.org/docs/rules/osrt-keys
  'sort-keys': 'off',

  // https://eslint.org/docs/rules/osrt-vars
  'sort-vars': 'off',

  // https://eslint.org/docs/latest/rules/unicode-bom
  'unicode-bom': ['error', 'never'],
};
