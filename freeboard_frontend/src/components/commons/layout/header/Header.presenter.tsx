import { Header, HeaderRight, HeaderLeft, Button } from "./Header.styles";
export default function HeaderUI(props) {
  return (
    <Header>
      <HeaderLeft>
        <div>지역: {props.cityName}</div>
        <div>날씨: {props.weatherMain}</div>
        <div>온도: {props.getTemp(props.temp)}</div>
      </HeaderLeft>
      <HeaderRight>
        <Button onClick={props.MoveLogin}>로그인</Button>
        <Button onClick={props.MoveSignup}>회원가입</Button>
      </HeaderRight>
    </Header>
  );
}
