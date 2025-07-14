import type { ESLintRules } from 'eslint/rules';
import type { RemoveIndexSignature } from './remove-index-signature.js';

export type CoreRulesPicker<
  TRuleName extends keyof RemoveIndexSignature<ESLintRules>,
> = Pick<RemoveIndexSignature<ESLintRules>, TRuleName>;
