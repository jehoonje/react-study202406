import React, { useState, useRef, useEffect } from 'react';
import { MdAdd } from "react-icons/md";
import './scss/TodoInput.scss';

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // 입력 폼이 열렸을 때 자동으로 포커스를 설정합니다.
      inputRef.current.focus();
    }
  }, [isOpen]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      return;
    }

    const newTodoObject = {
      id: Math.random().toString(),
      text: input,
      completed: false
    };

    onAdd(newTodoObject);
    setInput('');
    setIsOpen(false); // 제출 후 닫기
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isOpen) {
      e.preventDefault();
      formSubmitHandler(e);
    }
  };

  const toggleForm = () => {
    setIsOpen(!isOpen); // 폼 열기/닫기 토글
  };

  return (
    <>
      <div className={`form-wrapper ${isOpen ? 'open' : undefined}`}>
        <form className='insert-form' onSubmit={formSubmitHandler} style={{ display: isOpen ? 'block' : 'none' }}>
          <input
            ref={inputRef}
            type='text'
            placeholder='할 일을 입력 후, 엔터를 누르세요!'
            onChange={inputChangeHandler}
            value={input}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
      <button
        className={`insert-btn ${isOpen ? 'open' : undefined}`}
        onClick={toggleForm}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
