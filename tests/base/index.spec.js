// @ts-check
import { describe, it } from 'node:test';
import assert from 'assert';

import { ESLint } from 'eslint';

const eslint = new ESLint();

describe('generic', () => {
  it('throws error', async () => {
    const result = await eslint.lintFiles(['./fixtures/generic']);

    assert.strictEqual(result.length, 1);

    const [firstFile] = result;

    assert.strictEqual(firstFile.errorCount, 3);

    const [
      noUnusedError, //
      noShadowError,
      disabledDirectiveError,
    ] = firstFile.messages;

    assert.strictEqual(noUnusedError.ruleId, 'no-unused-vars');
    assert.strictEqual(noShadowError.ruleId, 'no-shadow');
    assert.strictEqual(disabledDirectiveError.ruleId, null);
    assert.strictEqual(
      disabledDirectiveError.message,
      "Unused eslint-disable directive (no problems were reported from 'no-shadow').",
    );
  });
});

describe('import', () => {
  it('throws error', async () => {
    const result = await eslint.lintFiles(['./fixtures/import']);

    assert.strictEqual(result.length, 1);

    const [firstFile] = result;

    assert.strictEqual(firstFile.errorCount, 1);

    const [importOrderError] = firstFile.messages;

    assert.strictEqual(importOrderError.ruleId, 'import-x/order');
    assert.strictEqual(importOrderError.messageId, 'noLineWithinGroup');
  });
});
