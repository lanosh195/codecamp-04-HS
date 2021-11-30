import { RadioButton } from "../../board/write/BoardWrite.styles";

export default function LoginPageUI(props) {
  return (
    <>
      <div>
        <div>X</div>
        <div>로그인</div>
        <input type="text" placeholder="아이디" />
        <br />
        <input type="password" placeholder="비밀번호" />
        <br />
        <button>로그인</button>
        <div></div>
        <div>ㅡㅡㅡㅡㅡㅡㅡㅡ</div>

        <div>
          <span>회원가입</span>
          <span>|</span>
          <span>HOME</span>
          <div>ID찾기</div>
          <div>비밀번호 찾기</div>
        </div>
      </div>
    </>
  );
}
