//WEBPACK CONFIGURATION

//Hot loader
if (module.hot) {
    module.hot.accept();
}

//Less loader
require("./assets/stylesheets/main.less");

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(<App/>, document.getElementById('app'));