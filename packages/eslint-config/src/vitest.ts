import type { Linter, ESLint } from 'eslint';
import eslintPluginVitest from '@vitest/eslint-plugin';
import type { RuleModule } from '@typescript-eslint/utils/ts-eslint';

type GetRuleOptions<TRule> =
  TRule extends RuleModule<string, infer Options>
    ? Linter.RuleSeverityAndOptions<Options & unknown[]> | Linter.RuleSeverity
    : never;

type VitestPluginRules = Partial<(typeof eslintPluginVitest)['rules']>;
type ConfigRulesRemapped = {
  [RuleName in keyof VitestPluginRules as `vitest/${RuleName & string}`]: GetRuleOptions<
    VitestPluginRules[RuleName]
  >;
};

const vitestConfig: Linter.Config<ConfigRulesRemapped> = {
  files: ['tests/**'],
  plugins: { vitest: eslintPluginVitest as unknown as ESLint.Plugin },
  rules: {
    ...eslintPluginVitest.configs.recommended.rules,
    'vitest/consistent-test-filename': [
      'error',
      {
        pattern: '.*\\.spec\\.[tj]sx?$',
        allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
      },
    ],
    'vitest/consistent-test-it': 'error',
    'vitest/consistent-vitest-vi': 'error',
    'vitest/max-nested-describe': ['error', { max: 2 }],
    'vitest/max-expects': ['error', { max: 5 }],
    'vitest/prefer-importing-vitest-globals': 'error',
    'vitest/require-mock-type-parameters': 'error',
  },
};
export default vitestConfig;
