import type { Linter } from 'eslint';

import type { PluginRuleNamesRemapper } from '../_utils/plugin-rules-mapper.js';

/** @see GET_RULES_NAME.md */
type PluginRuleNames =
  | 'no-children-prop'
  | 'no-children-prop-with-children'
  | 'no-comment-textnodes'
  | 'no-key-after-spread'
  | 'no-leaked-dollar'
  | 'no-leaked-semicolon'
  | 'no-namespace'
  | 'no-useless-fragment';

type ConfigRulesName = Exclude<PluginRuleNames, ''>;

type PluginRulesConfig = Required<
  PluginRuleNamesRemapper<'react-jsx', ConfigRulesName>
>;

export const JSX_RULES: Linter.RulesRecord = {
  // https://www.eslint-react.xyz/docs/rules/jsx-no-children-prop
  'react-jsx/no-children-prop': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
  'react-jsx/no-children-prop-with-children': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
  'react-jsx/no-comment-textnodes': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-key-after-spread
  'react-jsx/no-key-after-spread': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
  'react-jsx/no-leaked-dollar': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
  'react-jsx/no-leaked-semicolon': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-namespace
  'react-jsx/no-namespace': 'error',

  // https://www.eslint-react.xyz/docs/rules/jsx-no-useless-fragment
  'react-jsx/no-useless-fragment': [
    'error',
    {
      allowEmptyFragment: false,
    },
  ],
} satisfies PluginRulesConfig;
