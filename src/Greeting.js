import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    let greetingsText = '';
    if (!this.props.name) {
      greetingsText = 'Please enter your name';
    } else {
      greetingsText = `Hello ${this.props.name}`;
    }

    return (
      <div className="greeting">
        {greetingsText}
      </div>
    );
  }
}
export default Greeting;
