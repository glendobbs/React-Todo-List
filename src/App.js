import React, { Component } from 'react';
import InputForm from './form';
import ItemList from './item-list';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: ["Buy bread", "Feed cat", "Design todo list"],
      input: ''
    };

  }

  onDelete = (item) => {
    const updatedItems = this.state.items.filter((val, index) => item !== val);
    this.setState({
      items: updatedItems
    });
  }

  onChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  onSubmit = (value) => {
    const updatedItems = this.state.items;
    updatedItems.push(value);
    this.setState({
      items: updatedItems,
      input: ''
    });
  }


  render() {
    return (
      <div className="App">
        <ItemList items={this.state.items} onDelete={this.onDelete} />
        <InputForm input={this.state.input} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
