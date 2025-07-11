type Extension = `.${string}`;

export function createExtensionMinimatch(extensions: ReadonlyArray<Extension>) {
  return `{${extensions.map((it) => it.slice(1)).join(',')}}`;
}

// ================================================

interface Options {
  mode: 'main' | 'full';
}

export function getJSExtensions(options: Options): Array<Extension> {
  const { mode } = options;

  const list: Array<`.${string}`> = ['.js'];
  if (mode === 'full') list.push('.cjs', '.mjs');

  return list;
}

export function getJSXExtensions(): Array<Extension> {
  const list: Array<`.${string}`> = ['.tsx'];
  return list;
}

// ================================================

export function getTSExtensions(options: Options): Array<Extension> {
  const { mode } = options;

  const list: Array<`.${string}`> = ['.ts'];
  if (mode === 'full') list.push('.cts', '.mts');

  return list;
}

export function getTSXExtensions(): Array<Extension> {
  const list: Array<`.${string}`> = ['.tsx'];
  return list;
}

// ================================================

export const ALL_EXTENSIONS = [
  ...getJSExtensions({ mode: 'full' }),
  ...getTSExtensions({ mode: 'full' }),
  ...getJSXExtensions(),
  ...getTSXExtensions(),
];

// ================================================

export const ALL_EXTENSIONS_MINIMATCH = `**/*.${createExtensionMinimatch(ALL_EXTENSIONS)}`;
