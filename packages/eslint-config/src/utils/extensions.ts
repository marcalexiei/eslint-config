export const JS_EXTENSIONS = ['.js', '.cjs', '.mjs'];

export const TS_EXTENSIONS = ['.ts', '.cts', '.mts'];

export const ALL_JS_BASED_EXTENSIONS = [...TS_EXTENSIONS, ...JS_EXTENSIONS];

// ================================================

export const JSX_JS_EXTENSIONS = ['.jsx'];

export const JSX_TS_EXTENSIONS = ['.tsx'];

// ================================================

export const ALL_EXTENSIONS = [
  ...ALL_JS_BASED_EXTENSIONS,
  ...JSX_JS_EXTENSIONS,
  ...JSX_TS_EXTENSIONS,
];

export const ALL_JSX_EXTENSIONS_MATCH = `**/*.{${ALL_EXTENSIONS.join(',')}}`;
