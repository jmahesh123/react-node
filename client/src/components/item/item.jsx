import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  removeItem() {}
  render() {
    const item = this.props.item;
    return (
      <li>
        <span>{item.name}</span>
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
