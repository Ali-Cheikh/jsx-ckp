import React from 'react';
import './App.css';
import myImage from './img1.png'

// import Header from "./components/Header"


function App() {
  return (
    <div className="hello-ahmed">
      <h1 style={{
        Border:'solid black',
        maxWidth:'100vw',
        color:'red'
         }}hi>
     hi how are you fine go ...  </h1>
      <img src="/img3.png" alt="#" className="img" /><br />
      <img src={myImage} alt="#" className="img"  /><br />
      <h3>video link</h3>
      <br/>
      <h4>https://www.youtube.com/watch?v=9AboneIxeM8&list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm&index=1&ab_channel=PaulHanna</h4>
      <video width="1000" height="700" controls><source src="/hi.mp4" type="video/mp4" /> </video>
   <br/>
   
   
    </div>
  );
}

export default App;
