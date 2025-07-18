import type { Linter } from 'eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { ALL_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

const reactHooksConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react-hooks',
  files: [ALL_EXTENSIONS_MINIMATCH],
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};

export default reactHooksConfig;
