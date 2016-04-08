'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _outputConfig = require('./output-config');

var _outputConfig2 = _interopRequireDefault(_outputConfig);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _plugin = require('webpack-isomorphic-tools/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

var _isomorphicToolsConfig = require('./isomorphic-tools-config');

var _isomorphicToolsConfig2 = _interopRequireDefault(_isomorphicToolsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isomorphicToolsPlugin = new _plugin2.default(_isomorphicToolsConfig2.default).development(_env2.default.DEVELOPMENT);

// webpack configuration
exports.default = {

    context: _context2.default,

    entry: {
        app: ['./src/client.js']
    },

    output: _outputConfig2.default,

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            exclude: _path2.default.join(__dirname, '../../node_modules'),
            loader: _extractTextWebpackPlugin2.default.extract('style-loader', ['css-loader?importLoaders=1', 'postcss-loader'])
        }]
    },

    postcss: {
        defaults: [(0, _autoprefixer2.default)({ browsers: ['last 2 versions'] })]
    },

    plugins: [isomorphicToolsPlugin, new _webpack2.default.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(_env2.default.PRODUCTION ? 'production' : 'development'),
            APP_ENV: JSON.stringify('browser')
        }
    }), new _extractTextWebpackPlugin2.default('styles-[contenthash].css', { disable: _env2.default.HOT })],

    devtool: _env2.default.DEVELOPMENT ? _env2.default.HOT ? '#cheap-module-eval-source-map' : '#source-map' : undefined
};
//# sourceMappingURL=config.js.map