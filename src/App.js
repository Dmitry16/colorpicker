import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ColorPicker</h1>
        </header>
        <ColorPicker />
      </div>
    );
  }
}

export default App;
