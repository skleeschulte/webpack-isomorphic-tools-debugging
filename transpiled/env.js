'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var env = {
    DEVELOPMENT: process.env.NODE_ENV === 'development',
    PRODUCTION: process.env.NODE_ENV !== 'development',
    HOT: false,

    SERVER: process.env.APP_ENV !== 'browser',
    CLIENT: process.env.APP_ENV === 'browser'
};

if (env.DEVELOPMENT) env.HOT = true;

exports.default = env;
//# sourceMappingURL=env.js.map