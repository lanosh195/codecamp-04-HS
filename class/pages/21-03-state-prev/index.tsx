import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCountUP() {
    //1. 화살표 함수
    // setCount((prev) => prev + 1);

    //2. 그냥 함수
    // setCount(function (prev) {
    //로직 추가 하기 ... const aaa=3;
    //로직 추가 하기
    //   return prev + 1;
    // });

    //3. 화살표 함수에서 매개 변수 바꾸기
    setCount((qwhrjioehnt) => qwhrjioehnt + 1);
  }
  return (
    <>
      <div>현재 카운트: {count} </div>
      <button onClick={onClickCountUP}>카운트 증가!!!</button>
    </>
  );
}
