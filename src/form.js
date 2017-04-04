import React, { Component } from 'react';


class InputForm extends Component {
  render(){
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.props.onChange}
        value={this.props.input} ref="newItem" placeholder="add new task" required />
      <button className = "submit" type="submit">Add</button>
    </form>
  );
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.refs.newItem.value);
}

}

export default InputForm;
