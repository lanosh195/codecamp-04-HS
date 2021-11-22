import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    }
    //아래쪽 fetchDog()함수를 useEffect 밖으로 빼게 되면 계속 랜더링 됨.
    fetchDog();
  }, []);

  return (
    <>
      <div>오픈API 연습!!!</div>
      <img src={dogUrl} />
    </>
  );
}
