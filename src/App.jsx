import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"

function App() {
  return (
 
    <div className="App1">
       <h3>welcam to my web site</h3>
      <form className="App2">
      <input type="text" class="form-control" className="App1" placeholder="First name" />
      <input type="text" class="form-control" className="App1" placeholder="Last name" />
      <br/>
      <img src="/img/logo512.png" alt="#"className="img" />
      <br />
      <br />
      <submit className="btn btn-primary">submit</submit>
      </form>
    </div>
  );
}

export default App;
