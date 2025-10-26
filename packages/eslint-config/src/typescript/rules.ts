import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

import { PREFER_DESTRUCTURING_RULE_SETTING } from '../_rule-settings/prefer-destructuring.js';
import { NO_EMPTY_FUNCTIONS_RULE_SETTING } from '../_rule-settings/no-empty-function.js';
import type { PluginRulesRemapper } from '../_utils/plugin-rules-mapper.js';
import type { RemoveIndexSignature } from '../_utils/remove-index-signature.js';
/**
 * This is not very polished but typescript eslint doesn't expose rules types
 * @see TYPESCRIPT_RULES_CONFIG
 */
import type tsEslintPluginRules from '../../node_modules/@typescript-eslint/eslint-plugin/dist/rules/index.js';

const ESLINT_RULES_HANDLED_BY_TS = {
  // Check `@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended-raw.js` rules

  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'off', // ts(2335) & ts(2377)

  // https://eslint.org/docs/rules/getter-return
  'getter-return': 'off', // ts(2378)

  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'off', // ts(2629)

  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'off', // ts(2588)

  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'off', // ts(2300)

  // https://eslint.org/docs/rules/no-dupe-class-members/
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)

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

  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-with': 'off', // ts(1101) & ts(2410)
} satisfies Linter.RulesRecord;

const ESLINT_RULES_HANDLED_BY_TS_OPTIONS = {
  // Handled by "allowUnreachableCode": false tsconfig options
  // https://typescript-eslint.io/rules/consistent-return/
  'consistent-return': 'off',

  // Handled by `strict` or `noImplicitThis` ts options
  // https://typescript-eslint.io/rules/no-invalid-this/
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // Replaced by "allowUnreachableCode": false tsconfig options
  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'off', // ts(7027)
} satisfies Linter.RulesRecord;

// Get all eslint rules keys
// `ESLintRules` extends `Linter.RulesRecord` which has string as index signature
// Index signature prevents to statically known constant keys to it has to be removed
type KnownEslintRulesKeys = keyof RemoveIndexSignature<ESLintRules>;

// Rule names not required by the config
// They include rules
// - ESLINT_RULES_HANDLED_BY_TS_OPTIONS
// - ESLINT_RULES_HANDLED_BY_TS
// - typescript eslint deprecated rules that are still available in the plugin
type RulesNameBlocklist =
  | keyof typeof ESLINT_RULES_HANDLED_BY_TS_OPTIONS
  | keyof typeof ESLINT_RULES_HANDLED_BY_TS

  // ⬇️ deprecated rules ⬇️
  // https://typescript-eslint.io/rules/no-var-requires
  | 'no-var-requires'
  // https://typescript-eslint.io/rules/prefer-ts-expect-error
  | 'prefer-ts-expect-error'
  // https://typescript-eslint.io/rules/sort-type-constituents
  | 'sort-type-constituents'
  // https://typescript-eslint.io/rules/typedef
  | 'typedef'
  // https://typescript-eslint.io/rules/no-type-alias
  | 'no-type-alias'
  // https://typescript-eslint.io/rules/no-loss-of-precision
  | 'no-loss-of-precision'
  // https://typescript-eslint.io/rules/no-empty-interface/
  | 'no-empty-interface';

// Retrieve all relevant typescript eslint rules
type PluginRules = Omit<typeof tsEslintPluginRules, RulesNameBlocklist>;

type PluginRulesConfig = PluginRulesRemapper<
  '@typescript-eslint',
  PluginRules
> &
  // Core rules can only be disabled here
  Partial<Record<KnownEslintRulesKeys, 'off'>>;

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
 *
 * If typescript eslint removes or add an error an error type will be added on the below line
 *
 * This should not affect users since these types are not exposed to it:
 * {@link TYPESCRIPT_RULES}, which is the only export of this file has {@link Linter.RulesRecord}
 * as type so all other types used in this file wll not part of the declaration file.
 */
const TYPESCRIPT_RULES_CONFIG: PluginRulesConfig = {
  // https://typescript-eslint.io/rules/adjacent-overload-signatures/
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // https://tkdodo.eu/blog/array-types-in-type-script
  // https://typescript-eslint.io/rules/array-type/
  '@typescript-eslint/array-type': ['error', { default: 'generic' }],

  // https://typescript-eslint.io/rules/await-thenable/
  '@typescript-eslint/await-thenable': 'error',

  // https://typescript-eslint.io/rules/ban-ts-comment/
  '@typescript-eslint/ban-ts-comment': 'error',

  // never used this so no need for this rule
  // https://typescript-eslint.io/rules/ban-tslint-comment/
  '@typescript-eslint/ban-tslint-comment': 'off',

  // https://typescript-eslint.io/rules/class-literal-property-style/
  '@typescript-eslint/class-literal-property-style': 'error',

  // https://typescript-eslint.io/rules/class-methods-use-this/
  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',

  // https://typescript-eslint.io/rules/consistent-generic-constructors/
  '@typescript-eslint/consistent-generic-constructors': 'error',

  // https://typescript-eslint.io/rules/consistent-indexed-object-style/
  '@typescript-eslint/consistent-indexed-object-style': 'error',

  // https://typescript-eslint.io/rules/consistent-type-assertions/
  '@typescript-eslint/consistent-type-assertions': 'error',

  // https://typescript-eslint.io/rules/consistent-type-definitions/
  '@typescript-eslint/consistent-type-definitions': 'error',

  // https://typescript-eslint.io/rules/consistent-type-exports/
  '@typescript-eslint/consistent-type-exports': 'error',

  // Used together with import-x/consistent-type-specifier-style
  // https://typescript-eslint.io/rules/consistent-type-imports/
  '@typescript-eslint/consistent-type-imports': 'error',

  // https://typescript-eslint.io/rules/default-param-last/
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',

  // https://typescript-eslint.io/rules/dot-notation/
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  // https://typescript-eslint.io/rules/explicit-function-return-type/
  '@typescript-eslint/explicit-function-return-type': 'error',

  // https://typescript-eslint.io/rules/explicit-member-accessibility/
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    { accessibility: 'no-public' },
  ],

  // https://typescript-eslint.io/rules/explicit-module-boundary-types/
  '@typescript-eslint/explicit-module-boundary-types': 'error',

  // https://typescript-eslint.io/rules/init-declarations/
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'off',

  // https://typescript-eslint.io/rules/max-params/
  'max-params': 'off',
  '@typescript-eslint/max-params': 'error',

  // https://typescript-eslint.io/rules/member-ordering/
  '@typescript-eslint/member-ordering': 'error',

  // https://typescript-eslint.io/rules/method-signature-style/
  '@typescript-eslint/method-signature-style': ['error', 'property'],

  // https://typescript-eslint.io/rules/naming-convention/
  camelcase: 'off',
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

  // https://typescript-eslint.io/rules/no-array-constructor/
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',

  // https://typescript-eslint.io/rules/no-array-delete/
  '@typescript-eslint/no-array-delete': 'error',

  // https://typescript-eslint.io/rules/no-base-to-string/
  '@typescript-eslint/no-base-to-string': 'error',

  // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',

  // https://typescript-eslint.io/rules/no-confusing-void-expression/
  '@typescript-eslint/no-confusing-void-expression': 'error',

  // https://typescript-eslint.io/rules/no-deprecated/
  '@typescript-eslint/no-deprecated': 'error',

  // https://typescript-eslint.io/rules/no-duplicate-enum-values/
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  // https://typescript-eslint.io/rules/no-duplicate-type-constituents/
  '@typescript-eslint/no-duplicate-type-constituents': 'error',

  // https://typescript-eslint.io/rules/no-dynamic-delete/
  '@typescript-eslint/no-dynamic-delete': 'error',

  // https://typescript-eslint.io/rules/no-empty-function/
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': NO_EMPTY_FUNCTIONS_RULE_SETTING,

  // https://typescript-eslint.io/rules/no-empty-object-type/
  '@typescript-eslint/no-empty-object-type': 'error',

  // https://typescript-eslint.io/rules/no-explicit-any/
  '@typescript-eslint/no-explicit-any': 'error',

  // https://typescript-eslint.io/rules/no-extra-non-null-assertion/
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // https://typescript-eslint.io/rules/no-extraneous-class/
  '@typescript-eslint/no-extraneous-class': 'error',

  // https://typescript-eslint.io/rules/no-floating-promises/
  '@typescript-eslint/no-floating-promises': 'error',

  // https://typescript-eslint.io/rules/no-for-in-array/
  '@typescript-eslint/no-for-in-array': 'error',

  // https://typescript-eslint.io/rules/no-implied-eval/
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',

  // Disable to avoid error on side effect import like:
  // - stylesheets
  // - module with side effect ('moment-duration-format')
  // https://typescript-eslint.io/rules/no-import-type-side-effects/
  '@typescript-eslint/no-import-type-side-effects': 'off',

  // https://typescript-eslint.io/rules/no-inferrable-types/
  '@typescript-eslint/no-inferrable-types': 'error',

  // https://typescript-eslint.io/rules/no-invalid-void-type/
  '@typescript-eslint/no-invalid-void-type': 'error',

  // https://typescript-eslint.io/rules/no-loop-func/
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',

  // https://typescript-eslint.io/rules/no-magic-numbers/
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',

  // https://typescript-eslint.io/rules/no-meaningless-void-operator/
  '@typescript-eslint/no-meaningless-void-operator': 'error',

  // https://typescript-eslint.io/rules/no-misused-new/
  '@typescript-eslint/no-misused-new': 'error',

  // todo consider enable
  // https://typescript-eslint.io/rules/no-misused-promises/
  '@typescript-eslint/no-misused-promises': 'off',

  // https://typescript-eslint.io/rules/no-misused-spread/
  '@typescript-eslint/no-misused-spread': 'error',

  // https://typescript-eslint.io/rules/no-mixed-enums/
  '@typescript-eslint/no-mixed-enums': 'error',

  // https://typescript-eslint.io/rules/no-namespace/
  '@typescript-eslint/no-namespace': 'error',

  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

  // Disabled to avoid conflicts with @typescript-eslint/non-nullable-type-assertion-style
  // https://typescript-eslint.io/rules/no-non-null-assertion/
  '@typescript-eslint/no-non-null-assertion': 'off',

  // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

  // https://typescript-eslint.io/rules/no-redundant-type-constituents/
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  // https://typescript-eslint.io/rules/no-require-imports/
  '@typescript-eslint/no-require-imports': 'error',

  // https://typescript-eslint.io/rules/no-restricted-imports/
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': 'error',

  // https://typescript-eslint.io/rules/no-restricted-types/
  '@typescript-eslint/no-restricted-types': 'error',

  // https://typescript-eslint.io/rules/no-shadow/
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  // https://typescript-eslint.io/rules/no-this-alias/
  '@typescript-eslint/no-this-alias': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-condition/
  '@typescript-eslint/no-unnecessary-condition': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment/
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-qualifier/
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-template-expression/
  '@typescript-eslint/no-unnecessary-template-expression': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments/
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-type-conversion/
  '@typescript-eslint/no-unnecessary-type-conversion': 'error',

  // https://typescript-eslint.io/rules/no-unnecessary-type-parameters/
  '@typescript-eslint/no-unnecessary-type-parameters': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-argument/
  '@typescript-eslint/no-unsafe-argument': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-assignment/
  '@typescript-eslint/no-unsafe-assignment': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-call/
  '@typescript-eslint/no-unsafe-call': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-enum-comparison/
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-function-type/
  '@typescript-eslint/no-unsafe-function-type': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-member-access/
  '@typescript-eslint/no-unsafe-member-access': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-return/
  '@typescript-eslint/no-unsafe-return': 'error',

  // https://typescript-eslint.io/rules/no-unsafe-type-assertion/
  '@typescript-eslint/no-unsafe-type-assertion': 'off',

  // https://typescript-eslint.io/rules/no-unsafe-unary-minus/
  '@typescript-eslint/no-unsafe-unary-minus': 'error',

  // https://typescript-eslint.io/rules/no-unused-expressions/
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',

  // https://typescript-eslint.io/rules/no-unused-vars/
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',

  // https://typescript-eslint.io/rules/no-use-before-define/
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',

  // https://typescript-eslint.io/rules/no-useless-constructor/
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'off',

  // https://typescript-eslint.io/rules/no-useless-empty-export/
  '@typescript-eslint/no-useless-empty-export': 'error',

  // https://typescript-eslint.io/rules/no-wrapper-object-types/
  '@typescript-eslint/no-wrapper-object-types': 'error',

  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',

  // https://typescript-eslint.io/rules/only-throw-error/
  'no-throw-literal': 'off',
  '@typescript-eslint/only-throw-error': 'error',

  // https://typescript-eslint.io/rules/parameter-properties/
  '@typescript-eslint/parameter-properties': 'error',

  // https://typescript-eslint.io/rules/prefer-as-const/
  '@typescript-eslint/prefer-as-const': 'error',

  // https://typescript-eslint.io/rules/prefer-destructuring/
  'prefer-destructuring': 'off',
  '@typescript-eslint/prefer-destructuring': PREFER_DESTRUCTURING_RULE_SETTING,

  // https://typescript-eslint.io/rules/prefer-enum-initializers/
  '@typescript-eslint/prefer-enum-initializers': 'error',

  // https://typescript-eslint.io/rules/prefer-find/
  '@typescript-eslint/prefer-find': 'error',

  // https://typescript-eslint.io/rules/prefer-for-of/
  '@typescript-eslint/prefer-for-of': 'error',

  // https://typescript-eslint.io/rules/prefer-function-type/
  '@typescript-eslint/prefer-function-type': 'error',

  // https://typescript-eslint.io/rules/prefer-includes/
  '@typescript-eslint/prefer-includes': 'error',

  // https://typescript-eslint.io/rules/prefer-literal-enum-member/
  '@typescript-eslint/prefer-literal-enum-member': 'error',

  // https://typescript-eslint.io/rules/prefer-namespace-keyword/
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // https://typescript-eslint.io/rules/prefer-nullish-coalescing/
  '@typescript-eslint/prefer-nullish-coalescing': 'error',

  // https://typescript-eslint.io/rules/prefer-optional-chain/
  '@typescript-eslint/prefer-optional-chain': 'error',

  // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
  'prefer-promise-reject-errors': 'off',
  '@typescript-eslint/prefer-promise-reject-errors': 'error',

  // https://typescript-eslint.io/rules/prefer-readonly/
  '@typescript-eslint/prefer-readonly': 'error',

  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types/
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',

  // https://typescript-eslint.io/rules/prefer-regexp-exec/
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // https://typescript-eslint.io/rules/prefer-return-this-type/
  '@typescript-eslint/prefer-return-this-type': 'error',

  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // https://typescript-eslint.io/rules/promise-function-async/
  '@typescript-eslint/promise-function-async': 'off',

  // https://typescript-eslint.io/rules/related-getter-setter-pairs/
  '@typescript-eslint/related-getter-setter-pairs': 'error',

  // https://typescript-eslint.io/rules/require-array-sort-compare/
  '@typescript-eslint/require-array-sort-compare': 'off',

  // https://typescript-eslint.io/rules/require-await/
  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',

  // https://typescript-eslint.io/rules/restrict-plus-operands/
  '@typescript-eslint/restrict-plus-operands': 'error',

  // https://typescript-eslint.io/rules/restrict-template-expressions/
  '@typescript-eslint/restrict-template-expressions': 'error',

  // https://typescript-eslint.io/rules/return-await/
  '@typescript-eslint/return-await': 'error',

  // https://typescript-eslint.io/rules/strict-boolean-expressions/
  '@typescript-eslint/strict-boolean-expressions': 'off',

  // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
  '@typescript-eslint/switch-exhaustiveness-check': 'off',

  // https://typescript-eslint.io/rules/triple-slash-reference/
  '@typescript-eslint/triple-slash-reference': 'error',

  // https://typescript-eslint.io/rules/unbound-method/
  '@typescript-eslint/unbound-method': 'error',

  // https://typescript-eslint.io/rules/unified-signatures/
  '@typescript-eslint/unified-signatures': 'error',

  // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable/
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
};

export const TYPESCRIPT_RULES: Linter.RulesRecord = {
  ...ESLINT_RULES_HANDLED_BY_TS,
  ...ESLINT_RULES_HANDLED_BY_TS_OPTIONS,
  ...TYPESCRIPT_RULES_CONFIG,
};
