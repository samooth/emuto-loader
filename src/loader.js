import compiler from 'emuto/lib/compiler';

export default source =>
  `
    import builtins from 'emuto/lib/builtins';
    export default (${compiler(source)})(builtins);
  `.trim();
