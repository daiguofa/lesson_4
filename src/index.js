import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App from './lesson2/App';
// import App from './carbon/App';
// import App from './lesson3/App';
import App from './lesson4/App';
// import App from './lesson3/todo/App';

console.log("REACT_APP_MSG:",process.env.REACT_APP_MSG);

ReactDOM.render(
  <React.StrictMode>
    {App}
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
