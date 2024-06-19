import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({ items = [] }) => {
  const remainingTasks = items.filter(item => !item.completed).length;
  // 현재 날짜 포맷팅
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const weekday = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  })


  return (
    <header>
      <h1>{dateString}</h1>
      <div className='day'>{weekday}</div>
      <div className='tasks-left'>할 일 {remainingTasks}개 남음</div>
    </header>
  );
};

export default TodoHeader;
