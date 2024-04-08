import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, deleteTodo }) => {
  const initialCompleted = todo.completed || false; // Default value if completed is undefined
  const [completed, setCompleted] = useState(initialCompleted);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${completed ? 'completed' : ''}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={`todo-${todo.id}`}
          onChange={handleCheckboxChange}
          checked={completed}
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
