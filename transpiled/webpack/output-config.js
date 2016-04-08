'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    path: _path2.default.join(__dirname, '../../assets'),
    publicPath: '/assets/',
    filename: '[name]-' + (_env2.default.HOT ? '[hash]' : '[chunkhash]') + '.js'
};
//# sourceMappingURL=output-config.js.map