import React, { Component } from "react";
import "./item.css";

class TodoItem extends Component {
  state = {};
  removeItem() {}
  render() {
    const item = this.props.item;
    return (
      <li className="item">
        <span className="item-title">{item.Name}</span>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.item)}
        >
          Remove Item
        </button>
      </li>
    );
  }
}
export default TodoItem;
