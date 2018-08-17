import React, { Component } from "react";
import TodoItem from "../item";
import "./items.css";

class Todo extends Component {
  state = {
    todoList: [],
    addItem: ""
  };
  componentDidMount() {
    fetch("/api/todoList")
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        this.setState({ todoList: response });
      });
  }
  addItem() {
    let todoListTemp = this.state.todoList.slice();
    todoListTemp.push({
      Id: this.state.todoList.length + 1,
      Name: this.state.addItem
    });
    this.setState({ addItem: "", todoList: todoListTemp });
  }
  setInputValue(event) {
    this.setState({ addItem: event.target.value });
  }
  itemDelete($event) {
    let todoTemp = this.state.todoList.slice();
    const index = todoTemp.findIndex(item => item.Id === $event.Id);
    todoTemp.splice(index, 1);
    this.setState({ todoList: todoTemp });
  }
  render() {
    return (
      <div className="todo-wrapper">
        <div>Todo Component</div>
        <ul>
          {this.state.todoList.map(todo => (
            <TodoItem
              onDelete={event => this.itemDelete(event)}
              key={todo.Id}
              item={todo}
            />
          ))}
        </ul>
        <div className="items-action">
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
      </div>
    );
  }
}
export default Todo;
