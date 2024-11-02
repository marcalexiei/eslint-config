import type { Linter } from 'eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const reactHooksConfig: Linter.Config = {
  name: '@marcalexiei/eslint-config/react-hooks',
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};

export default reactHooksConfig;
