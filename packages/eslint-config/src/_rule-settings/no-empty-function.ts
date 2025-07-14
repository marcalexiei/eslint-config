import type { ESLintRules } from 'eslint/rules';

export const NO_EMPTY_FUNCTIONS_RULE_SETTING: ESLintRules['no-empty-function'] =
  ['error', { allow: ['constructors', 'arrowFunctions', 'methods'] }];
