import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';

import { ALL_JSX_EXTENSIONS_MATCH } from './utils/extensions.js';

// @ts-expect-error `configs.flat.recommended.rules` doesn't have proper types
const reactConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react',
  files: [ALL_JSX_EXTENSIONS_MATCH],
  // @ts-expect-error flat is optional for types but actually is always defined
  ...reactPlugin.configs.flat.recommended,
  rules: {
    // @ts-expect-error flat is optional for types but actually is always defined
    ...reactPlugin.configs.flat.recommended.rules,

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
    'react/no-object-type-as-default-prop': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

export default reactConfig;
