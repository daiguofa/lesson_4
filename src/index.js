import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './lesson2/App';
// import App from './lesson3/App';
import App from './lesson4/App';

import "bootstrap/dist/css/bootstrap.min.css"
import "./lesson4/assets/style/index.css"



ReactDOM.render(
  <React.StrictMode>
    {App}
  </React.StrictMode>,
  document.getElementById('root')
);

