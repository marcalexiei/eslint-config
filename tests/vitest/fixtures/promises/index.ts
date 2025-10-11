declare function anAsyncFunction(...args: Array<unknown>): Promise<void>;

// should trigger @typescript-eslint/no-floating-promises
anAsyncFunction('...', () => {});

void anAsyncFunction('...', () => {});

(async (): Promise<void> => {
  await anAsyncFunction('...', () => {});
})().catch(() => {});

export {};
