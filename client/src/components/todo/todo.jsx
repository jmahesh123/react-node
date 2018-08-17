import React, { Component } from "react";
import TodoItem from "../item";

class Todo extends Component {
  state = {
    todoList: [
      { id: 1, name: "Milk" },
      { id: 2, name: "Learn Course" },
      { id: 3, name: "Pay Bill" }
    ],
    addItem: ""
  };
  addItem() {
    let todoListTemp = this.state.todoList.slice();
    todoListTemp.push({
      id: this.state.todoList.length + 1,
      name: this.state.addItem
    });
    this.setState({ addItem: "", todoList: todoListTemp });
  }
  setInputValue(event) {
    this.setState({ addItem: event.target.value });
  }
  itemDelete($event) {
    let todoTemp = this.state.todoList.slice();
    const index = todoTemp.findIndex(item => item.id === $event.id);
    todoTemp.splice(index, 1);
    this.setState({ todoList: todoTemp });
  }
  render() {
    return (
      <div>
        <div>Todo Component</div>
        <ul>
          {this.state.todoList.map(todo => (
            <TodoItem
              onDelete={event => this.itemDelete(event)}
              key={todo.id}
              item={todo}
            />
          ))}
        </ul>
        <input
          type="text"
          value={this.state.addItem}
          onChange={e => this.setInputValue(e)}
          placeholder="Add item"
        />
        <button
          type="button"
          disabled={!this.state.addItem}
          className="btn btn-primary"
          onClick={() => this.addItem()}
        >
          Add Item
        </button>
        <button type="button" className="btn btn-secondary">
          Save
        </button>
      </div>
    );
  }
}
export default Todo;
