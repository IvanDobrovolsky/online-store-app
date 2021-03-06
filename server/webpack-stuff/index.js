'use strict';

module.exports = app => {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./../../webpack.config.js');
    const compiler = webpack(webpackConfig);

//Setting webpack development middleware
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
};



