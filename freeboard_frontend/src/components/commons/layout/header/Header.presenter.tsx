import { Header, HeaderRight, HeaderLeft, Button } from "./Header.styles";
export default function HeaderUI() {
  return (
    <Header>
      <HeaderLeft></HeaderLeft>
      <HeaderRight>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </HeaderRight>
    </Header>
  );
}
