import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import './index.css';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Apples",
          completed: false
        },
        {
          name: "Patis",
          completed: true
        }
      ],
      newGroceryName: "",
      completedCount: 1,
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(event) {
    this.setState({ newGroceryName: event.target.value });
  }

  addGroceryItem() {
    if(this.state.newGroceryName) {
      let newGroceryItem = { name: this.state.newGroceryName };
      this.setState({
        groceries: this.state.groceries.concat([newGroceryItem])
      });
    }
  }

  clearList(event) {
    this.setState({groceries: []});
  }

  // Fill the definition of the following method to allow completing each item
  // Hint 1: Pay attention to the element's index on the list.
  toggleGroceryCompleteness(groceryIndex) {
    // Put your code here
    let groceries = this.state.groceries;
    groceries[groceryIndex].completed = !groceries[groceryIndex].completed;
    this.setState({
      groceries: groceries,
      completedCount: groceries[groceryIndex].completed ? this.state.completedCount + 1 : this.state.completedCount - 1
    })
  }

  render() {
    let groceriesComponents = [],
        newProductInput,
        newProductAddButton,
        clearListButton;
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryItem
            grocery={this.state.groceries[index]}
            onComplete={this.toggleGroceryCompleteness.bind(this, index)}
          />
      );
    }

    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;
    newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>;
    clearListButton = <button className='clear-list' onClick={this.clearList}>Clear the List</button>;
    let title = `My Grocery List (${this.state.completedCount}/${this.state.groceries.length})`
    return (
      <div className='grocery-list'>
        <h3> {title} </h3>
        <div>
          {newProductInput}
          {newProductAddButton}
        </div>
        <ul>
          {groceriesComponents}
        </ul>
        <div>
          {clearListButton}
        </div>
      </div>
    );
  }
}

export default GroceryList;