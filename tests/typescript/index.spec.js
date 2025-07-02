// @ts-check
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

describe('import/no-cycle', () => {
  it('throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/import-no-cycle']);

    assert.strictEqual(result.length, 2);
    assert.strictEqual(
      result.every((el) => el.errorCount === 1),
      true,
      'one error for each file',
    );
    assert.strictEqual(
      result
        .flatMap((el) => el.messages)
        .every((el) => el.ruleId === 'import-x/no-cycle'),
      true,
      'all error must come from "import/no-cycle"',
    );
  });
});

describe('type-imports', () => {
  it('throw error', async () => {
    const result = await eslint.lintFiles(['./fixtures/type-imports']);

    const fileWithErrors = result.filter((el) => el.errorCount > 0);

    assert.strictEqual(fileWithErrors.length, 1);

    const [firstFile] = fileWithErrors;

    assert.strictEqual(firstFile.errorCount, 2);

    const [firstFileError, firstSecondError] = firstFile.messages;

    assert.strictEqual(
      firstFileError.ruleId,
      'import-x/consistent-type-specifier-style',
    );
    assert.strictEqual(
      firstSecondError.ruleId,
      '@typescript-eslint/consistent-type-imports',
    );
  });
});
