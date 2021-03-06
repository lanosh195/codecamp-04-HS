export default function BrowserStoragePage() {
  function onClickSetCookie() {
    document.cookie = "aaa = 철수";
  }
  function onClickSetLocalStorage() {
    localStorage.setItem("bbb", "영희");
  }
  function onClickSetSessionStorage() {
    sessionStorage.setItem("ccc", "훈이");
  }

  function onClickGetCookie() {
    // "aaa=철수; ddd=맹구; zzz=짱구".split("; ").filter(el=> el.startsWith("zzz="))[0]

    const zzz = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0]; //"zzz=짱구"
    console.log(zzz.split("=")[1]);
    console.log(zzz);
  }
  function onClickGetLocalStorage() {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  }
  function onClickGetSessionStorage() {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  }
  //   if (process.browser) {
  //     const ccc = sessionStorage.getItem("ccc");
  //   }

  return (
    <>
      <button onClick={onClickSetCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSetLocalStorage}>로컬 스토리지에 저장하기</button>
      <button onClick={onClickSetSessionStorage}>
        세션 스토리지에 저장하기
      </button>
      ============================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬 스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션 스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
