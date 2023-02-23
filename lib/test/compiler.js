"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _webpack = _interopRequireDefault(require("webpack"));

var _memoryFs = _interopRequireDefault(require("memory-fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (fixture, options = {}) => {
  const compiler = (0, _webpack.default)({
    context: __dirname,
    entry: `./${fixture}`,
    mode: 'development',
    output: {
      path: _path.default.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.eq/,
        use: {
          loader: _path.default.resolve(__dirname, '../loader.js')
        }
      }]
    }
  });
  compiler.outputFileSystem = new _memoryFs.default();
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err);
      resolve(stats);
    });
  });
};

exports.default = _default;