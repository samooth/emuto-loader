"use strict";

var _compiler = _interopRequireDefault(require("./compiler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('outputs correct JavaScript', async () => {
  const stats = await (0, _compiler.default)('./example.eq');
  const output = stats.toJson().modules[1].source;
  const source = '(function(_) { return (function(input) { return 8*3.14/2})})';
  expect(output).toBe(`
    module.exports = (${source})(require('emuto/lib/builtins.js'));
  `.trim());
});