import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  //componentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();
    //componentWillUnmont와 동일 return 부분.
    return () => {
      console.log("잘가요~");
    };
  }, []);

  //componentDidUpdate와 비슷 완전히 동일하진 않음. 첫1회 무조건 실행
  useEffect(() => {
    console.log("수정됨!!!");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}> 카운트 올리기!!!</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
