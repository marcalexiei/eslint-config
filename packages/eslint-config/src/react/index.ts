import type { Linter } from 'eslint';
import eslintJsxPlugin from 'eslint-plugin-react-jsx';
import eslintReactPlugin from 'eslint-plugin-react-x';

import { ALL_TS_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

import { CUSTOM_RULES } from './rules-custom.js';
import { JSX_RULES } from './rules-jsx.js';
import { REACT_RULES } from './rules-react.js';

const reactConfig: Linter.Config = {
  ...CUSTOM_RULES,
  name: '@marcalexiei/eslint-config/react',
  files: [ALL_TS_EXTENSIONS_MINIMATCH],
  plugins: {
    ...CUSTOM_RULES.plugins,
    'react-x': eslintReactPlugin,
    'react-jsx': eslintJsxPlugin,
  },
  rules: {
    ...CUSTOM_RULES.rules,
    ...JSX_RULES,
    ...REACT_RULES,
  },
};

export default reactConfig;
