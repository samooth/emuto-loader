import compiler from './compiler.js';

test('outputs correct JavaScript', async () => {
  const stats = await compiler('./example.eq');
  const output = stats.toJson().modules[1].source;

  const source = '(function(_) { return (function(input) { return 8*3.14/2})})';

  expect(output).toBe(
    `
    module.exports = { default: (${source})(require('emuto/lib/builtins.js'))};
  `.trim(),
  );
});
