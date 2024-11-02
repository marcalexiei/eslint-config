import type { ESLintRules } from 'eslint/rules';

export const STRICT_RULES: Partial<ESLintRules> = {
  // https://eslint.org/docs/latest/rules/strict
  strict: ['error', 'never'],
};
