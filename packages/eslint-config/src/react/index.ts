import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';

import { ALL_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

const reactConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react',
  files: [ALL_EXTENSIONS_MINIMATCH],
  ...reactPlugin.configs.flat.recommended,
  rules: {
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
