import type { Linter } from 'eslint';

export const STRICT_RULES: Linter.RulesRecord = {
  // https://eslint.org/docs/latest/rules/strict
  strict: ['error', 'never'],
};
