import type { ESLintRules } from 'eslint/rules';

export const PREFER_DESTRUCTURING_RULE_SETTING: ESLintRules['prefer-destructuring'] =
  [
    'error',
    {
      VariableDeclarator: {
        array: true,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ];
