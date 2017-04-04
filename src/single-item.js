import React, { Component } from 'react';

class SingleItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-delete" onClick={this.handleDelete}> x</span>
          <span className="item-name">{this.props.item}</span>
          <hr className="item-break" />
        </div>
      </li>
    );
  }

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  }


}

export default SingleItem;
