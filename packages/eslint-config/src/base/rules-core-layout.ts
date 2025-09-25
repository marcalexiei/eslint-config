import type { Linter } from 'eslint';

import type { CoreRulesPicker } from '../_utils/core-rules-picker.js';

type RuleName = 'unicode-bom';

export const RULES_CORE_LAYOUT: Linter.RulesRecord = {
  // https://eslint.org/docs/latest/rules/unicode-bom
  'unicode-bom': ['error', 'never'],
} satisfies CoreRulesPicker<RuleName>;
