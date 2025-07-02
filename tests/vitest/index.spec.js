// @ts-check
/* eslint-disable import-x/no-extraneous-dependencies */
import { describe, it } from 'node:test';
import assert from 'assert';

import { ESLint } from 'eslint';

const eslint = new ESLint();

describe('generic', () => {
  it('no errors', async () => {
    const result = await eslint.lintFiles(['./fixtures/generic']);
    const errorCounter = result.reduce(
      (sum, { errorCount }) => sum + errorCount,
      0,
    );
    assert.strictEqual(errorCounter, 0, 'no errors should be found');
  });
});

describe('consistent-test-filename', () => {
  it('throw error', async () => {
    const result = await eslint.lintFiles([
      './fixtures/consistent-test-filename',
    ]);

    assert.strictEqual(result.length, 1);

    const [fileResult] = result;
    assert.strictEqual(fileResult.errorCount, 1, 'one error');
    assert.strictEqual(
      result
        .flatMap((el) => el.messages)
        .every((el) => el.ruleId === 'vitest/consistent-test-filename'),
      true,
      'all error must come from "vitest/consistent-test-filename"',
    );
  });
});
