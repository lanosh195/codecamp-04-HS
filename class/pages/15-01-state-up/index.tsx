import Child2 from "../../src/components/units/stateup/child2";
import Child1 from "../../src/components/units/stateup/child1";
import { useState } from "react";

export default function StateUPPage() {
  const [count, setCount] = useState(0);
  //state, setState

  function onClickCounter() {
    setCount((prev) => prev + 1);
    //setState
  }

  return (
    <>
      <Child1 count={count} onClickCounter={onClickCounter} />
      <div>===================</div>
      <Child2 count={count} onClickCounter={onClickCounter} />
      {/* <button onClick={onClickCounter}>카운트 올리기</button> */}
    </>
  );
}

//state만 넘겨주고
//자식 컴포넌트 setState로 변경된 것이 state에 다시 반영?!
