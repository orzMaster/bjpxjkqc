'use strict';

var nodeEnv = (function() {
    var env = process.env.NODE_ENV;

    if (!env) {
        env = process.env.NODE_ENV = 'development';
    } else if (!(env === 'development' || env === 'production')) {
        console.log('Error: NODE_ENV must be "development" or "production"');
        process.exit(1);
    }

    return env;
})(); // direct call

var config = require('./config_current.js');
config.nodeEnv = nodeEnv;

console.log('Server NODE_ENV: %s', nodeEnv);

module.exports = config;
