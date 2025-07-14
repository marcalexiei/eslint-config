import type { CoreRulesPicker } from '../_utils/core-rules-picker.js';

type RuleName = 'unicode-bom';

export const RULES_CORE_LAYOUT: CoreRulesPicker<RuleName> = {
  // https://eslint.org/docs/latest/rules/unicode-bom
  'unicode-bom': ['error', 'never'],
};
