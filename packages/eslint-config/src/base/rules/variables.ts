import type { ESLintRules } from 'eslint/rules';

export const VARIABLES_RULES: Partial<ESLintRules> = {
  // https://eslint.org/docs/latest/rules/init-declarations
  'init-declarations': 'off',

  // https://eslint.org/docs/latest/rules/no-delete-var
  'no-delete-var': 'error',

  // https://eslint.org/docs/latest/rules/no-label-var
  'no-label-var': 'error',

  // https://eslint.org/docs/latest/rules/no-restricted-globals
  'no-restricted-globals': 'off',

  // https://eslint.org/docs/latest/rules/no-shadow
  'no-shadow': 'error',

  // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // https://eslint.org/docs/latest/rules/no-undef
  'no-undef': 'error',

  // https://eslint.org/docs/latest/rules/no-undef-init
  'no-undef-init': 'error',

  // https://eslint.org/docs/latest/rules/no-undefined
  'no-undefined': 'off',

  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': 'error',

  // https://eslint.org/docs/rules/
  'no-use-before-define': 'error',
};
