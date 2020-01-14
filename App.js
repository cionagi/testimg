import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestImg from "./TestImg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <TestImg url={logo} round={true} width={30} height={30} alt={'texto alternativo'} responsive={false}/>
          <TestImg url={logo} round={true} width={30} height={30} alt={'texto alternativo'} responsive={false}/>
          <TestImg url={logo} round={true} width={30} height={30} alt={'texto alternativo'} responsive={false}/>
          <TestImg url={logo} round={true} width={30} height={30} alt={'texto alternativo'} responsive={false}/>
          <TestImg url={logo} round={true} width={30} height={30} alt={'texto alternativo'} responsive={false}/>
          <TestImg url={logo} round={true} width={30} height={30} alt={'texto alternativo'} responsive={false}/>
      </header>
    </div>
  );
}

export default App;
