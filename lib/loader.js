"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _compiler = _interopRequireDefault(require("emuto/lib/compiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(source) {
  if (this.cacheable) this.cacheable();
  return `
    module.exports = (${(0, _compiler.default)(source)})(require('emuto/lib/builtins.js'));
  `.trim();
}