// src/components/TodoItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, deleteTodo }) => {
  const handleCheckboxChange = () => {
    // Handle marking todo items as completed
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={`todo-${todo.id}`}
          onChange={handleCheckboxChange}
          checked={todo.completed}
        />
        <label className="form-check-label" htmlFor={`todo-${todo.id}`}>
          {todo.text}
        </label>
      </div>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

export default TodoItem;
