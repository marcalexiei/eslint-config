import type { ESLint, Linter } from 'eslint';
import eslintReactPlugin from 'eslint-plugin-react-x';

import { ALL_EXTENSIONS_MINIMATCH } from '../_utils/extensions.js';

import { REACT_RULES } from './rules.js';

const reactConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react',
  files: [ALL_EXTENSIONS_MINIMATCH],
  plugins: {
    'react-x': eslintReactPlugin as unknown as ESLint.Plugin,
  },
  rules: REACT_RULES,
};

export default reactConfig;
