"use strict";
const serverConfig = require('./server.config');

const express = require('express');
const bodyParser = require('body-parser');
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

//Using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//This is to allow routing on frontend

const apiRouter = express.Router();

apiRouter.use((request, response, next) => {
    //Logging each request to the console
    console.log(request.method, `/api${request.url}`);
    next();
});

//Mock data
const computers = require('./mockups/computers.js');

const getComputerById = id => computers.find(computer => computer.id == id);

apiRouter.get('/computers', (request, response) => {
    response.json(computers);
});

apiRouter.post('/computers', (request, response) => {
    const newComputer = request.body;
    if(newComputer){
        computers.unshift(request.body);
    }
    console.log(request.body);
});

apiRouter.get('/computers/:id', (request, response) => {
    response.json(computers.find(computer => computer.id == request.params.id));
});

apiRouter.put('/computers/:id', (request, response) => {
    const id = request.params.id;
    const computerToUpdate = request.body;
    if(id && computerToUpdate){
        let index = computers.indexOf(getComputerById(request.params.id));
        computers[index] = request.body;
    }
});

apiRouter.delete('/computers/:id', (request, response) => {
    let computerToRemove = getComputerById(request.params.id);
    if(computerToRemove){
        computers.splice(computers.indexOf(computerToRemove), 1);
    }
});

apiRouter.get('/brands', (request, response) => {
    response.json(Array.from(new Set(computers.map(computer => computer.brand))));
});


app.use('/api', apiRouter);

//Listening to client requests
app.get('*', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(serverConfig.port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`The server is running on port: ${serverConfig.port}`);
    }
});