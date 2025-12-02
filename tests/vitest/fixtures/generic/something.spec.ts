import { describe, expect, it, vi } from 'vitest';

describe('something', () => {
  vi.advanceTimersByTime(1);

  it('awful', () => {
    expect(1).toBe(1);
  });
});
