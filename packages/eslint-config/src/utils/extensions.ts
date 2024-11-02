export const JS_EXTENSIONS = ['.js', '.cjs', '.mjs'];

export const TS_EXTENSIONS = ['.ts', '.cts', '.mts'];

// ================================================

export const JSX_EXTENSIONS = ['.jsx'];

export const TSX_EXTENSIONS = ['.tsx'];

// ================================================

export const ALL_EXTENSIONS = [
  ...TS_EXTENSIONS,
  ...JS_EXTENSIONS,
  ...JSX_EXTENSIONS,
  ...TSX_EXTENSIONS,
];

export const ALL_JSX_EXTENSIONS_MATCH = `**/*.{${ALL_EXTENSIONS.map((it) => it.slice(1)).join(',')}}`;
