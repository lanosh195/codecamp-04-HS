import * as S from "./singup.styles";
export default function SignupUIPage(props: any) {
  return (
    <>
      <S.SignupWrapper>
        <div>이메일</div>

        <S.InputBox
          type="text"
          placeholder="email을 입력해주세요."
          name="email"
          onChange={props.onChangeInputs}
        />

        <div>이름</div>
        <S.InputBox
          type="text"
          placeholder="이름을 입력해주세요"
          name="name"
          onChange={props.onChangeInputs}
        />
        <div>비밀번호</div>
        <S.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          onChange={props.onChangeInputs}
        />
        <div>비밀번호 확인</div>

        <S.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password2"
          onChange={props.onChangePassword2}
        />
        <br />
        <S.SignupButton onClick={props.onClickSignup}>가입하기</S.SignupButton>
      </S.SignupWrapper>
    </>
  );
}
