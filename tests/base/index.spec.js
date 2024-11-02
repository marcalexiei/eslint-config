// @ts-check
/* eslint-disable import-x/no-extraneous-dependencies */
import { describe, it } from 'node:test';
import assert from 'assert';

import { ESLint } from 'eslint';

const eslint = new ESLint();

describe('generic', () => {
  it('throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/generic']);

    assert.strictEqual(result.length, 1);

    const [firstFile] = result;

    assert.strictEqual(firstFile.errorCount, 2);

    const [noUnusedError, noShadowError] = firstFile.messages;

    assert.strictEqual(noUnusedError.ruleId, 'no-unused-vars');
    assert.strictEqual(noShadowError.ruleId, 'no-shadow');
  });
});
