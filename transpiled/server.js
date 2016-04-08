'use strict';

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _webpackIsomorphicTools = require('webpack-isomorphic-tools');

var _webpackIsomorphicTools2 = _interopRequireDefault(_webpackIsomorphicTools);

var _isomorphicToolsConfig = require('./webpack/isomorphic-tools-config');

var _isomorphicToolsConfig2 = _interopRequireDefault(_isomorphicToolsConfig);

var _context = require('./webpack/context');

var _context2 = _interopRequireDefault(_context);

var _outputConfig = require('./webpack/output-config');

var _outputConfig2 = _interopRequireDefault(_outputConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initialize express
 */
var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

/**
 * Serve webpack assets
 */
var assetsRoute = _outputConfig2.default.publicPath.replace(/\/$/, '');
app.use(assetsRoute, _express2.default.static(_outputConfig2.default.path));

/**
 * Setup webpack isomorphic tools
 */
console.log('[server] setting up webpack-isomorphic-tools');
var isomorphicTools = new _webpackIsomorphicTools2.default(_isomorphicToolsConfig2.default).development(_env2.default.DEVELOPMENT).server(_context2.default, function () {
    console.log('[server] webpack-isomorphic-tools setup finished, starting server');
    process.nextTick(afterIsomorphicToolsSetup); // nextTick so that isomorphicTools will be set
});

/**
 * Setup server side rendering and start server
 */
function afterIsomorphicToolsSetup() {
    // require renderingMiddleware after isomorphic tools setup has finished, so that requireing assets works
    var renderingMiddleware = require('./server-rendering').default;
    app.use(renderingMiddleware(isomorphicTools));

    // start server
    server.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('[server] listening at http://%s:%s', host, port);
    });
}
//# sourceMappingURL=server.js.map