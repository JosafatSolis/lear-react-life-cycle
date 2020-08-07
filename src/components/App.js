import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav/Nav";
import Routes from '../Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes />
    </div>
  );
}

export default App;
