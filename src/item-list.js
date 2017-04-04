import React, { Component } from 'react';
import SingleItem from './single-item';
import moment from 'moment';

const ItemList = (props) => {
  const date = moment().format('MMM Do YY');
    return (
      <div>
        <div id="head">
          <span className="title">Todo List</span>
          <span className="date">{date}</span>
          <hr className="title-break" />
        </div>
        <ul>
          { props.items.map((item, i) => <SingleItem item={item} key={i} onDelete={props.onDelete} />) }
        </ul>
    </div>
    );
  }


export default ItemList;
