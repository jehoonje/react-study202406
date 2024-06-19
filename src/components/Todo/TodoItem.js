import React from 'react';
import { MdDelete, MdDone } from "react-icons/md";
import './scss/TodoItem.scss';

const TodoItem = ({ item, onDelete, onToggle }) => {
  const deleteHandler = (e) => {
    e.stopPropagation();
    onDelete(item.id);
  };

  const toggleHandler = (e) => {
    e.stopPropagation();
    onToggle(item.id);
  };

  return (
    <li className={`todo-list-item ${item.completed ? 'completed' : ''}`}>
      <div
        className={`check-circle ${item.completed ? 'active' : ''}`}
        onClick={toggleHandler}
      >
        {item.completed && <MdDone />}
      </div>
      <span className={`text ${item.completed ? 'finish' : ''}`}>
        {item.text}
      </span>
      <div className="remove" onClick={deleteHandler}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
