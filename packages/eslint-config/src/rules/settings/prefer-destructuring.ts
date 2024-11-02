import type { Linter } from 'eslint';

export const PREFER_DESTRUCTURING_RULE_SETTING: Linter.RuleSeverityAndOptions<
  [
    {
      VariableDeclarator: { array: boolean; object: boolean };
      AssignmentExpression: { array: boolean; object: boolean };
    },
    {
      enforceForRenamedProperties: boolean;
    },
  ]
> = [
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
