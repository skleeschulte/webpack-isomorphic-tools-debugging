'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _plugin = require('webpack-isomorphic-tools/plugin');

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    debug: true,

    webpack_assets_file_path: _path2.default.join(__dirname, 'webpack-assets.json'),
    webpack_stats_file_path: _path2.default.join(__dirname, 'webpack-stats.json'),

    assets: {
        images: {
            extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
        },
        styles: {
            extensions: ['css'],

            // which `module`s to parse CSS from:
            filter: function filter(module, regular_expression, options, log) {
                if (options.development) {
                    // In development mode there's Webpack "style-loader",
                    // which outputs `module`s with `module.name == asset_path`,
                    // but those `module`s do not contain CSS text.
                    //
                    // The `module`s containing CSS text are
                    // the ones loaded with Webpack "css-loader".
                    // (which have kinda weird `module.name`)
                    //
                    // Therefore using a non-default `filter` function here.
                    //
                    return _plugin2.default.style_loader_filter(module, regular_expression, options, log);
                }

                // In production mode there will be no CSS text at all
                // because all styles will be extracted by Webpack Extract Text Plugin
                // into a .css file (as per Webpack configuration).
                //
                // Therefore in production mode `filter` function always returns non-`true`.
            },

            // How to correctly transform kinda weird `module.name`
            // of the `module` created by Webpack "css-loader"
            // into the correct asset path:
            path: _plugin2.default.style_loader_path_extractor,

            // How to extract these Webpack `module`s' javascript `source` code.
            // basically takes `module.source` and modifies `module.exports` a little.
            parser: _plugin2.default.css_loader_parser
        }
    }
};
//# sourceMappingURL=isomorphic-tools-config.js.map