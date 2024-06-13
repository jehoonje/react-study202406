import React, { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => setNum(num + 1);
  const decrease = () => setNum(num - 1);

  // useState의 setter는 상태값을 업데이트 할 때
  // 렌더링 전까지 이전 상태값을 참조함

  // 해결방범: 함수형 업데이트를 사용
  // setNum((prev) => {
  //   console.log('변경 이전값: ' , prev);
  //   // 변경 이후를 반환
  //   return prev + 1;
  // });

  // setNum(num => num +1);

  // 상태값의 변경은 실시간으로 일어나지 않음.
  // 해결방법: useEffet 훅으로 해결 (뒤에 배움)
  // console.log('변경 이후값: ', num);

  return (
    <div>
      <h1>숫자 : {num}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default Counter;
