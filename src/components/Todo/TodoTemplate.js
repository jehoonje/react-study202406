import React, { useState } from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain items={todos} onDelete={deleteTodoHandler} onToggle={toggleTodoHandler} />
      <TodoInput onAdd={addTodoHandler} />
    </div>
  );
};

export default TodoTemplate;
