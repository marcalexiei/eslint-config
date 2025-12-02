import type { RuleModule } from '@typescript-eslint/utils/ts-eslint';
import type { Linter } from 'eslint';

type GetRuleOptions<TRule> =
  TRule extends RuleModule<string, infer Options>
    ?
        | Linter.RuleSeverityAndOptions<Options & Array<unknown>>
        | Linter.RuleSeverity
    : never;

/**
 * Extract the rules from a given plugin rules object
 *
 * @param TPrefix the prefix to the rules of the plugin
 * @param TRulesRecord the rules object from the plugin
 */
export type PluginRulesRemapper<TPrefix extends string, TRulesRecord> = {
  [RuleName in keyof TRulesRecord as `${TPrefix}/${RuleName & string}`]: GetRuleOptions<
    TRulesRecord[RuleName]
  >;
};

export type PluginRuleNamesRemapper<TPrefix extends string, TRulesNames> = {
  [RuleName in TRulesNames as `${TPrefix}/${RuleName & string}`]: Linter.RuleEntry;
};
