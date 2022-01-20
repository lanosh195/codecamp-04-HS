import * as S from "./singup.styles";
export default function SignupUIPage(props: any) {
  return (
    <>
      <S.SignupWrapper>
        <S.Title>이메일</S.Title>

        <S.InputBox
          type="text"
          placeholder="email을 입력해주세요."
          name="email"
          onChange={props.onChangeInputs}
        />

        <S.Title>이름</S.Title>
        <S.InputBox
          type="text"
          placeholder="이름을 입력해주세요"
          name="name"
          onChange={props.onChangeInputs}
        />

        {/* <S.Title>핸드폰 번호</S.Title>
        <S.InputBox
          type="text"
          placeholder="핸드폰 번호를 입력해주세요."
          name="phoneNumber"
          onChange={props.onChangePhoneNumber}
        /> */}

        <S.Title>비밀번호</S.Title>
        <S.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          onChange={props.onChangeInputs}
        />

        <S.Title>비밀번호 확인</S.Title>
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
