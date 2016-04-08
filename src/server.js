import env from './env'

import express from 'express'
import http from 'http'

import IsomorphicTools from 'webpack-isomorphic-tools'
import isomorphicToolsConfig from './webpack/isomorphic-tools-config'
import webpackContext from './webpack/context'
import webpackOutputConfig from './webpack/output-config'

/**
 * Initialize express
 */
const app = express();
const server = http.createServer(app);

/**
 * Serve webpack assets
 */
const assetsRoute = webpackOutputConfig.publicPath.replace(/\/$/, '');
app.use(assetsRoute, express.static(webpackOutputConfig.path));

/**
 * Setup webpack isomorphic tools
 */
console.log('[server] setting up webpack-isomorphic-tools');
const isomorphicTools = new IsomorphicTools(isomorphicToolsConfig)
    .development(env.DEVELOPMENT)
    .server(webpackContext, () => {
        console.log('[server] webpack-isomorphic-tools setup finished, starting server');
        process.nextTick(afterIsomorphicToolsSetup); // nextTick so that isomorphicTools will be set
    });

/**
 * Setup server side rendering and start server
 */
function afterIsomorphicToolsSetup() {
    // require renderingMiddleware after isomorphic tools setup has finished, so that requireing assets works
    const renderingMiddleware = require('./server-rendering').default;
    app.use(renderingMiddleware(isomorphicTools));

    // start server
    server.listen(3000, () => {
        var host = server.address().address;
        var port = server.address().port;

        console.log('[server] listening at http://%s:%s', host, port);
    });
}
