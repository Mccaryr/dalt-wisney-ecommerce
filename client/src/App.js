import React from 'react';
import Header from './components/Header/Header';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DrStrangeBackground from './assets/drstrange_background.png'
import './App.scss';

function App() {
  return (
    <div> 
        <Header />   
        <img src={DrStrangeBackground} alt="Dr Strange" style={{width:"80%", height:"50%", alignContent:"center", justifyContent:"center", paddingLeft:"10%", paddingRight:"10%"}}/>
    </div>
  );
}

export default App;
