import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js';
import GroceryList from './GroceryList.js';

class App extends Component {
  state = {
    name: ''
  }
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Greeting name={this.state.name} />
          <input type='text' onChange={this.onNameChange} />
          <GroceryList />
        </p>
      </div>
    );
  }
}

export default App;
