import "./App.css";
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import Greet from "./components/Greet";

const App = () => {
  // jsx 규칙
  // 1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
  // 2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
  // 3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  // 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

  
  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: '치킨먹음',
      price: 30000,
      date: new Date(2024, 6 - 1, 3)
    },
    {
      title: '족발먹음',
      price: 40000,
      date: new Date(2024, 6 - 1, 7)
    },
    {
      title: '헬스장등록',
      price: 300000,
      date: new Date(2024, 6 - 1, 12)
    },
  ];

  return (
    <>
      <ExpenseList expenses={expenses}/>
      <Greet>
        <ul>
          <li>사과</li>
          <li>포도</li>
          <li>오렌지</li>
        </ul>
      </Greet>
      <Greet>
        <ol>
          <li>하나</li>
          <li>둘</li>
          <li>셋</li>
        </ol>
      </Greet>
      <Greet>
        <a href="#">링크</a>
      </Greet>
    </>
  );
};

export default App;
