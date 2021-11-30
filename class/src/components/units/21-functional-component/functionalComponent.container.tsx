import FunctionalComponentUI from "./functionalComponent.presenter";

export default function FunctionalComponent() {
  //   return <>{FunctionalComponentUI({ count: 34242 })}</>; ////함수형
  return <FunctionalComponentUI count={34242} />; ////컴포넌트형
}
