//WEBPACK CONFIGURATION

//Hot loader
if (module.hot) {
    module.hot.accept();
}

//Less loader
require("./assets/stylesheets/main.less");

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>React application(Online store)</h1>, document.getElementById('app'));