// @ts-check
import assert from 'node:assert';
import { describe, it } from 'node:test';

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
        ruleId: 'react-x/exhaustive-deps',
        severity: 2,
        message:
          "React Hook React.useEffect has a missing dependency: 'boh'. Either include it or remove the dependency array.",
      },
      {
        ruleId: 'react-x/rules-of-hooks',
        severity: 2,
        message:
          'React Hook "React.useMemo" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?',
      },
      {
        ruleId: 'react-x/exhaustive-deps',
        severity: 2,
        message:
          "React Hook React.useMemo has a missing dependency: 'boh'. Either include it or remove the dependency array.",
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
    assert.strictEqual(
      message.ruleId,
      'react-x/no-missing-component-display-name',
    );
    assert.strictEqual(message.severity, 2);
    assert.strictEqual(message.messageId, 'default');
  });
});

describe('no-unused-props', () => {
  it('should throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/no-unused-props']);

    const fileMessages = result[0].messages;
    assert.strictEqual(fileMessages.length, 1);

    const [message] = fileMessages;
    assert.strictEqual(message.ruleId, 'react-x/no-unused-props');
    assert.strictEqual(message.severity, 2);
    assert.strictEqual(message.messageId, 'default');
  });
});

describe('no-useless-fragment', () => {
  it('should throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/no-useless-fragment']);

    const fileMessages = result[0].messages;
    assert.strictEqual(fileMessages.length, 2);

    const [message1, message2] = fileMessages;

    assert.strictEqual(message1.ruleId, 'react-jsx/no-useless-fragment');
    assert.strictEqual(message1.severity, 2);
    assert.strictEqual(message1.messageId, 'default');

    assert.strictEqual(message2.ruleId, 'react-jsx/no-useless-fragment');
    assert.strictEqual(message2.severity, 2);
    assert.strictEqual(message2.messageId, 'default');
  });
});

describe('shorthand-fragment', () => {
  it('should throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/shorthand-fragment']);

    const fileMessages = result[0].messages;
    assert.strictEqual(fileMessages.length, 2);

    const [message1, message2] = fileMessages;

    assert.strictEqual(
      message1.ruleId,
      '@eslint-react/kit/jsx-shorthand-fragment',
    );
    assert.strictEqual(message1.severity, 2);
    assert.strictEqual(
      message1.message,
      'Use shorthand syntax for JSX fragments.',
    );

    assert.strictEqual(
      message2.ruleId,
      '@eslint-react/kit/jsx-shorthand-fragment',
    );
    assert.strictEqual(message2.severity, 2);
    assert.strictEqual(
      message2.message,
      'Use shorthand syntax for JSX fragments.',
    );
  });
});

describe('shorthand-boolean', () => {
  it('should throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/shorthand-boolean']);

    const fileMessages = result[0].messages;
    assert.strictEqual(fileMessages.length, 1);

    const [message] = fileMessages;
    assert.strictEqual(
      message.ruleId,
      '@eslint-react/kit/jsx-shorthand-boolean',
    );
    assert.strictEqual(message.severity, 2);
    assert.strictEqual(
      message.message,
      'Use shorthand syntax for boolean JSX props.',
    );
  });
});
