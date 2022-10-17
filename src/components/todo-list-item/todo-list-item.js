import React, {Component} from "react";

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render () {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item row';
    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
      <span
        className="todo-list-item-label col"
        onClick={ onToggleDone }
      >
        { label }
      </span>

      <div className="col-auto text-center">
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={ onToggleImportant }
        >
          <i className="fa-solid fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={ onDeleted }
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </span>
    );
  }
}