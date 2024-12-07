export const JS_EXTENSIONS = ['.js', '.cjs', '.mjs'] as const;

export const TS_EXTENSIONS = ['.ts', '.cts', '.mts'] as const;

// ================================================

export const JSX_EXTENSIONS = ['.jsx'] as const;

export const TSX_EXTENSIONS = ['.tsx'] as const;

// ================================================

export const ALL_EXTENSIONS = [
  ...TS_EXTENSIONS,
  ...JS_EXTENSIONS,
  ...JSX_EXTENSIONS,
  ...TSX_EXTENSIONS,
];

// ================================================

function createMinimatchFrom(extensionList: Array<`.${string}`>) {
  return `**/*.{${extensionList.map((it) => it.slice(1)).join(',')}}`;
}

export const ALL_JSX_EXTENSIONS_MINIMATCH = createMinimatchFrom(ALL_EXTENSIONS);
