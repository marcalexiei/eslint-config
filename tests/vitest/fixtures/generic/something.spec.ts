import { describe, expect, vi, it } from 'vitest';

describe('something', () => {
  vi.advanceTimersByTime(1);

  it('awful', () => {
    expect(1).toBe(1);
  });
});
