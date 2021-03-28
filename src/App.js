import logo from './logo.svg';
import './App.css';
import {  Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul className="nav nav-pills">
          <li><Link to="/">Home</Link></li>&nbsp;&nbsp;
          <li><Link to="/Lesson4">Lesson4(Todo)</Link></li> 
          <li style={{display:"none"}}><Link to="/carbon">Carbon</Link></li>         
        </ul>
        
      </header>
    </div>
  );
}

export default App;
