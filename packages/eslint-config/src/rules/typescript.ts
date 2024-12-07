import type { Linter } from 'eslint';

import { PREFER_DESTRUCTURING_RULE_SETTING } from './settings/prefer-destructuring.js';

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
 *
 * To update rules:
 * 1. Go to `node_modules/@typescript-eslint/eslint-plugin/dist/configs/all.js`
 * 2. Copy `rules` defined in the file inside `default-rules` region (after `customized-rules` region)
 * 3. Remove duplicated keys.
 *
 * @warning If you need to customize a newly added rule move it into
 *          the `customized-rules` region
 *
 */
export const TYPESCRIPT_RULES: Linter.RulesRecord = {
  // #region disabled eslint rules that are handled by ts
  // Check `node_modules/@typescript-eslint/eslint-plugin/dist/configs/all.js` rules

  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'off', // ts(2335) & ts(2377)

  // https://eslint.org/docs/rules/getter-return
  'getter-return': 'off', // ts(2378)

  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'off', // ts(2588)

  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'off', // ts(2300)

  // @see https://typescript-eslint.io/rules/no-dupe-class-members/
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
  '@typescript-eslint/no-dupe-class-members': 'error',

  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'off', // ts(1117)

  // https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'off', // ts(2630)

  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'off', // ts(2632) & ts(2540)

  // https://eslint.org/docs/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor': 'off', // ts(7009)

  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'off', // ts(2349)

  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'off', // ts(2451)

  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'off', // ts(2408)

  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'off', // ts(2376) & ts(17009)

  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'off', // ts(2304) & ts(2552)

  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
  // #endregion

  // #region disabled eslint rules that are handled by tsconfig options

  // Disabled since is already checked by typescript options
  // https://typescript-eslint.io/rules/typedef/
  '@typescript-eslint/typedef': 'error',

  // Disabled since is already checked by typescript options
  // https://typescript-eslint.io/rules/consistent-return/
  'consistent-return': 'off',
  '@typescript-eslint/consistent-return': 'error',

  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'off', // ts(7027)

  // #endregion

  // #region customized-rules

  // @see https://typescript-eslint.io/rules/init-declarations/
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'off',

  // we have no specific type we want to ban
  // https://typescript-eslint.io/rules/no-restricted-types/
  '@typescript-eslint/no-restricted-types': 'error',

  // https://typescript-eslint.io/rules/explicit-member-accessibility/
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    { accessibility: 'no-public' },
  ],

  // https://typescript-eslint.io/rules/method-signature-style/
  '@typescript-eslint/method-signature-style': ['error', 'property'],

  // https://typescript-eslint.io/rules/naming-convention/
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },

    {
      selector: 'import',
      format: ['camelCase', 'PascalCase'],
    },

    {
      selector: 'variable',
      format: [
        'camelCase',
        'UPPER_CASE',
        'PascalCase', // for React/Solid
      ],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },

    {
      selector: 'function',
      format: [
        'camelCase',
        'PascalCase', // for React/Solid
      ],
    },

    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },

    {
      selector: 'enumMember',
      format: ['UPPER_CASE'],
    },
  ],

  // https://typescript-eslint.io/rules/no-explicit-any/
  '@typescript-eslint/no-explicit-any': 'error',

  // @see https://tkdodo.eu/blog/array-types-in-type-script
  // https://typescript-eslint.io/rules/array-type/
  '@typescript-eslint/array-type': ['error', { default: 'generic' }],

  // Disable to avoid error on side effect import like:
  // - stylesheets
  // - module with side effect ('moment-duration-format')
  // https://typescript-eslint.io/rules/no-import-type-side-effects/
  '@typescript-eslint/no-import-type-side-effects': 'off',

  // https://typescript-eslint.io/rules/prefer-destructuring/
  'prefer-destructuring': 'off',
  '@typescript-eslint/prefer-destructuring': PREFER_DESTRUCTURING_RULE_SETTING,

  // https://typescript-eslint.io/rules/require-array-sort-compare/
  '@typescript-eslint/require-array-sort-compare': 'off',

  // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
  '@typescript-eslint/switch-exhaustiveness-check': 'off',

  // https://typescript-eslint.io/rules/strict-boolean-expressions/
  '@typescript-eslint/strict-boolean-expressions': 'off',

  // todo consider enable
  // https://typescript-eslint.io/rules/no-misused-promises/
  '@typescript-eslint/no-misused-promises': 'off',

  // There a lot of errors in test files,
  // consider to export another config to disable this rule in those scenarios
  // https://typescript-eslint.io/rules/no-empty-function/
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': ['off', { allow: ['constructors'] }],

  // https://typescript-eslint.io/rules/no-magic-numbers/
  '@typescript-eslint/no-magic-numbers': 'off',

  // https://typescript-eslint.io/rules/no-useless-constructor/
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'off',

  // https://typescript-eslint.io/rules/no-floating-promises/
  '@typescript-eslint/no-floating-promises': 'off',

  // create problems when directly returning a promise
  // https://typescript-eslint.io/rules/promise-function-async/
  '@typescript-eslint/promise-function-async': 'off',

  // https://typescript-eslint.io/rules/no-unsafe-member-access/
  '@typescript-eslint/no-unsafe-member-access': 'off',

  // https://typescript-eslint.io/rules/prefer-for-of/
  '@typescript-eslint/prefer-for-of': 'off',

  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types/
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Used together with import-x/consistent-type-specifier-style
  // https://typescript-eslint.io/rules/consistent-type-imports/
  '@typescript-eslint/consistent-type-imports': 'error',

  // #endregion

  // #region default-rules

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',
  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',
  '@typescript-eslint/consistent-generic-constructors': 'error',
  '@typescript-eslint/consistent-indexed-object-style': 'error',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/consistent-type-exports': 'error',
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  'max-params': 'off',
  '@typescript-eslint/max-params': 'error',
  '@typescript-eslint/member-ordering': 'error',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-object-type': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': 'error',
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unnecessary-type-parameters': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  'no-throw-literal': 'off',
  '@typescript-eslint/only-throw-error': 'error',
  '@typescript-eslint/parameter-properties': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-find': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  'prefer-promise-reject-errors': 'off',
  '@typescript-eslint/prefer-promise-reject-errors': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'error',
  'no-return-await': 'off',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

  // #endregion
};
