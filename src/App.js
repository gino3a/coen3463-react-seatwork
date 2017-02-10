import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js';
import GroceryList from './GroceryList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Seatwork</h2>
        </div>
        <p className="App-intro">
          <Greeting name='World' />
          <GroceryList />
        </p>
      </div>
    );
  }
}

export default App;
