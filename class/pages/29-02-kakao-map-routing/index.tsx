import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();

  function onCLickMoveToMap() {
    router.push("/29-03-kakao-map-routed");
  }
  return (
    <>
      <button onClick={onCLickMoveToMap}>맵으로 이동하기!!!</button>
    </>
  );
}
