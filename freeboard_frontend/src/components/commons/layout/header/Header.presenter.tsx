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
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </HeaderRight>
    </Header>
  );
}
