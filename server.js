"use strict";
const serverConfig = require('./server.config');

const express = require('express');
const app = express();

//Webpack stuff
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

//Setting webpack development middleware
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


//Setting public directory for front end
app.use(express.static(__dirname + '/src'));

//This is to allow routing on frontend
app.get('*', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

//Listening to client requests
app.listen(serverConfig.port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`The server is running on port: ${serverConfig.port}`);
    }
});