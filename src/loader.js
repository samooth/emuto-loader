import compiler from 'emuto/lib/compiler';

export default source => {
  if (this.cacheable) this.cacheable();
  return `
    import builtins from 'emuto/lib/builtins';
    export default (${compiler(source)})(builtins);
  `.trim();
};
