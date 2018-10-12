import compiler from 'emuto/lib/compiler';

export default function(source) {
  if (this.cacheable) this.cacheable();
  return `
    module.exports = { default: (${compiler(
      source,
    )})(require('emuto/lib/builtins.js'))};
  `.trim();
}
