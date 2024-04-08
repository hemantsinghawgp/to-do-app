// src/App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-grey my-5">
            <div className="card-body">
              <h1 className="card-title text-center">Minimal To-do List </h1>
              <AddTodo addTodo={addTodo} />
              <TodoList todos={todos} deleteTodo={deleteTodo} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
   
  );
 
};

export default App;
