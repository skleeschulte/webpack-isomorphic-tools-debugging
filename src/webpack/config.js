import env from '../env'
import context from './context'
import outputConfig from './output-config'

import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import IsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'
import isomorphicToolsConfig from './isomorphic-tools-config'

const isomorphicToolsPlugin = new IsomorphicToolsPlugin(isomorphicToolsConfig).development(env.DEVELOPMENT);

// webpack configuration
export default {

    context: context,

    entry: {
        app: [
            './src/client.js'
        ]
    },

    output: outputConfig,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                exclude: path.join(__dirname, '../../node_modules'),
                loader: ExtractTextPlugin.extract('style-loader', [
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ])
            }
        ]
    },

    postcss: {
        defaults: [
            autoprefixer({ browsers: ['last 2 versions'] })
        ]
    },

    plugins: [
        isomorphicToolsPlugin,
        new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.PRODUCTION ? 'production' : 'development'),
                    APP_ENV: JSON.stringify('browser')
                }
        }),
        new ExtractTextPlugin('styles-[contenthash].css', { disable: env.HOT })
    ],

    devtool: (env.DEVELOPMENT ? (env.HOT ? '#cheap-module-eval-source-map' : '#source-map') : undefined)
}
