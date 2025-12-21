import type { ESLint, Linter } from 'eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactHooksExtraPlugin from 'eslint-plugin-react-hooks-extra';

import { ALL_TS_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

const reactHooksConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react-hooks',
  files: [ALL_TS_EXTENSIONS_MINIMATCH],
  plugins: {
    'react-hooks': reactHooksPlugin as ESLint.Plugin,
    'react-hooks-extra': reactHooksExtraPlugin,
  },
  rules: {
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks
    'react-hooks/rules-of-hooks': 'error',
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
    'react-hooks/exhaustive-deps': 'error',

    'react-hooks-extra/no-direct-set-state-in-use-effect': 'error',
  },
};

export default reactHooksConfig;
