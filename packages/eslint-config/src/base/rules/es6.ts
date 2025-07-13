import type { ESLintRules } from 'eslint/rules';

import { PREFER_DESTRUCTURING_RULE_SETTING } from '../../_rule-settings/prefer-destructuring.js';

export const ES6_RULES: Partial<ESLintRules> = {
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',

  // https://eslint.org/docs/rules/logical-assignment-operators
  'logical-assignment-operators': 'off',

  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',

  // https://eslint.org/docs/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor': 'error',

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

  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',

  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    { ignoreConstructors: false, avoidQuotes: true },
  ],

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

  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-exponentiation-operator': 'error',

  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // Already done by import plugin rules
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': 'off',

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',
};
