// @ts-check
import { describe, it } from 'node:test';
import assert from 'assert';

import { ESLint } from 'eslint';

const eslint = new ESLint();

describe('generic', () => {
  it('should not throw errors', async () => {
    const result = await eslint.lintFiles(['./fixtures/generic']);
    const errorCounter = result.reduce(
      (sum, { errorCount }) => sum + errorCount,
      0,
    );
    assert.strictEqual(errorCounter, 0, 'no errors should be found');
  });
});

describe('react-hooks', () => {
  it('should throw errors for all react rules rules', async () => {
    const result = await eslint.lintFiles(['./fixtures/react-hooks']);

    const expectedErrors = [
      {
        ruleId: 'react-hooks/exhaustive-deps',
        severity: 2,
        message:
          "React Hook useEffect has a missing dependency: 'boh'. Either include it or remove the dependency array.",
      },
      {
        ruleId: 'react-hooks/rules-of-hooks',
        severity: 2,
        message:
          'React Hook "useMemo" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?',
      },
      {
        ruleId: 'react-hooks/exhaustive-deps',
        severity: 2,
        message:
          "React Hook useMemo has a missing dependency: 'boh'. Either include it or remove the dependency array.",
      },
    ];

    assert.deepStrictEqual(
      result[0].messages.map((el) => ({
        ruleId: el.ruleId,
        severity: el.severity,
        message: el.message,
      })),
      expectedErrors,
    );
  });
});

describe('display-name', () => {
  it('should throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/display-name']);

    const fileMessages = result[0].messages;
    assert.strictEqual(fileMessages.length, 1);

    const [message] = fileMessages;
    assert.strictEqual(message.ruleId, 'react/display-name');
    assert.strictEqual(message.severity, 2);
    assert.strictEqual(
      message.message,
      'Component definition is missing display name',
    );
  });
});
