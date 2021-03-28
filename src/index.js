import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,Route} from 'react-router';
import {  HashRouter as Router,  Route,  Link } from 'react-router-dom';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';
// import App from './lesson2/App';
// import App from './carbon/App';
// import App from './lesson3/App';
import Lesson4 from './lesson4/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./lesson4/assets/style/index.css"
import CarbonDemo from './carbon/App';


console.log("REACT_APP_MSG:",process.env.REACT_APP_MSG);

// ReactDOM.render(
//   <React.StrictMode>
//     {Lesson4}
//     {/* <Lesson4/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render((
  <React.StrictMode>
    <Router >
        <Route exact path="/" component={Home}/>
        <Route path="/Lesson4" component={Lesson4}/>
        <Route path="/carbon" component={CarbonDemo}/>
    </Router>
  </React.StrictMode>
  ),document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
