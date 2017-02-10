import React, { Component } from 'react';

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let completed = this.props.grocery.completed ? "completed" : '';
    return (
      <li className={completed} onClick={this.props.onComplete}>
        {this.props.grocery.name}
      </li>
    );
  }
}

export default GroceryItem;