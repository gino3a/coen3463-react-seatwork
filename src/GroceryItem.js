import React, { Component } from 'react';

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.grocery.name}
      </li>
    );
  }
}

export default GroceryItem;