import { useEffect, useState } from "react";

export default function useEffectDependencyArrayPage() {
  console.log("랜더링 시작!!");

  const [count, setCount] = useState(0);

  //1번 케이스  -최초 1회 실행(=didMount)
  // useEffect(() => {
  //   console.log("최초 한 번 실행됨!!!");
  // }, []);

  //2번 케이스  -의존성 배열의 count 감지 후 재실행
  // useEffect(() => {
  //   console.log("카운트가 변경되면 재실행!!!");
  // }, [count]);

  //3번 케이스  -최초 렌더링 +1 가급적 피해주는 게 좋음 /어쩔 수 없이 써야하는 경우도 있음.
  // useEffect(() => {
  //   setCount(100);
  // }, []);

  //4번 케이스  -무한 루프// 컴퓨터 태우고 싶으면 사용해라
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}> 카운트 올리기!!!</button>
    </>
  );
}
