const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

//함수형
function aaa(Component) {
  // return function bbb(props){
  // 로그인 검증 로직
  //   return "결과물"
  // }
}

//화살표 함수형
const aaa = (component) => {
  return (props) => {
    //로그인 검증 로직
    return "결과물";
  };
};

const withAuth = (Component) => (props) => {
  //로그인 검증 로직
  return <Component {...props} />;
};

const asdf = () => {
  return 123;
};

("중괄호랑 return 사이에 아무것도 없으면 생략 가능");
const asdf = () => 123;
