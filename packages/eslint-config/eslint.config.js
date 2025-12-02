import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginImportX from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
  {
    plugins: {
      'import-x': eslintPluginImportX,
    },
    rules: {
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          named: { enabled: true, export: false },
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...tseslint.configs.disableTypeChecked,
    files: ['*.js'],
  },
);
