import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import './index.css'

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [ { name: "Apples" }, { name: "Patis" }]
    };
  }

  render() {
    let groceriesComponents = [];
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryItem
            grocery={this.state.groceries[index]}
          />
      );
    }

    // Hint: Don't forget about putting items into `ul`
    return (
      <div className='grocery-list'>
        <h2>Grocery List</h2>
        <ul>
          {groceriesComponents}
        </ul>
      </div>
    );
  }
}

export default GroceryList;