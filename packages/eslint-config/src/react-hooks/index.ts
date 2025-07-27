import type { ESLint, Linter } from 'eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactHooksExtraPlugin from 'eslint-plugin-react-hooks-extra';

import { ALL_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

const reactHooksConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react-hooks',
  files: [ALL_EXTENSIONS_MINIMATCH],
  plugins: {
    'react-hooks': reactHooksPlugin,
    'react-hooks-extra': reactHooksExtraPlugin as unknown as ESLint.Plugin,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react-hooks-extra/no-direct-set-state-in-use-effect': 'error',
    'react-hooks-extra/no-unnecessary-use-prefix': 'error',
    'react-hooks-extra/prefer-use-state-lazy-initialization': 'error',
  },
};

export default reactHooksConfig;
