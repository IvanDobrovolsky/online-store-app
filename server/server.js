"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const serverConfig = require('./server.config');

//Running webpack here
require('./webpack-stuff')(app);

//Setting public directory for front end
app.use(express.static(path.join(__dirname, '../src')));

//Using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// API Routes
var apiRoutes = require('./routes/api-router')(app, express);
app.use('/api', apiRoutes);

//Listening to client requests
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(serverConfig.port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`The server is running on port: ${serverConfig.port}`);
    }
});