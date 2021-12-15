import { useCallback, useMemo, useState } from "react";
import MemoizationUI from "./presenter";

export default function Memoization() {
  console.log("컨테이너가 렌더링 됩니다!!!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   const randomValue = useMemo(() => {
  //     return Math.random();
  //   }, []);

  const randomValue = useMemo(() => Math.random(), []);
  //리턴 사이에 아무것도 없기 때문에 중괄호 삭제
  console.log(randomValue);

  const onClickCoutLetUp = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onclickCountStateUp = useCallback(() => {
    // console.log(countState + 1); //안에 있는 스테이트까지 기억해버린다
    setCountState((prev) => prev + 1); //prev 할 때마다 기존 값 꺼내와서 동작하게
  }, []);

  console.log(countState);

  return (
    <>
      <div>=========================</div>
      <div>이것은 컨테이너입니다. </div>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCoutLetUp}>카운트(let) +1</button>

      <div>카운트(state):{countState}</div>
      <button onClick={onclickCountStateUp}>카운트(state) +1</button>
      <div>=========================</div>
      <MemoizationUI countState={countState} />
    </>
  );
}
