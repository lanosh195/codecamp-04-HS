export default function MapElPage() {
  //기본 방법 (화살표 함수)
  //   ["짱구", "영희", "훈이"].map((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //    return `${el}는 못말려`;
  //   });
  // 기본 방법(그냥 함수)
  //   ["짱구", "영희", "훈이"].map(function (el, index) {
  //     console.log(`${el}는 못말려`, el);
  //     console.log("index", index);
  //     return `${el}는 못말려`;
  //   });
  //매개변수 바꿔보기
  //   ["짱구", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log("asdf", asdf);
  //     console.log("qwer", qwer);
  //   });
  //index, el 바꾸기
  ["짱구", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  // ["짱구", "영희", "훈이"].forEach((el, index) => {
  //   console.log("el", el);
  //   console.log("index", index);
  // });
  return <></>;
}
