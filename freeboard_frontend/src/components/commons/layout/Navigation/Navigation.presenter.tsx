import { NaviContents, Navigation } from "./Navigation.styles";
export default function NavigationUI(props) {
  return (
    <>
      <Navigation>
        <NaviContents onClick={props.onClickMoveToBoard}>
          자유게시판
        </NaviContents>
        <NaviContents>|</NaviContents>
        <NaviContents>중고마켓</NaviContents>
        <NaviContents>|</NaviContents>
        <NaviContents>마이페이지</NaviContents>
      </Navigation>
    </>
  );
}
