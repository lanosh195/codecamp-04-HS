import * as S from "./singup.styles";
export default function SignupUIPage(props: any) {
  return (
    <>
      <S.SignupWrapper>
        <S.SignupHeader>
          <S.SingupHeaderTitle>회원가입</S.SingupHeaderTitle>
          <S.RequiredWrapper>
            <S.Required>*</S.Required>
            <S.RequiredFields>필수 입력사항</S.RequiredFields>
          </S.RequiredWrapper>
        </S.SignupHeader>
        <S.SingupContainer>
          <S.Title>이메일</S.Title>
          <S.Required>*</S.Required>
          <S.InputBox
            type="text"
            placeholder="email을 입력해주세요."
            name="email"
            onChange={props.onChangeInputs}
          />
          <br />
          <S.Title>이름</S.Title>
          <S.Required>*</S.Required>
          <S.InputBox
            type="text"
            placeholder="이름을 입력해주세요"
            name="name"
            onChange={props.onChangeInputs}
          />
          <br />
          <S.Title>핸드폰 번호</S.Title>
          <S.InputBox
            type="text"
            placeholder="핸드폰 번호를 입력해주세요."
            name="phoneNumber"
            onChange={props.onChangePhoneNumber}
          />
          <br />
          <S.Title>비밀번호</S.Title>
          <S.Required>*</S.Required>
          <S.InputBox
            type="password"
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={props.onChangeInputs}
          />
          <br />
          <S.Title>비밀번호 확인</S.Title>
          <S.Required>*</S.Required>
          <S.InputBox
            type="password"
            placeholder="비밀번호를 입력해주세요."
            name="password2"
            onChange={props.onChangePassword2}
          />
          <br />
          {/* 주소검색도 가져와서 주소 넣기 */}
          <S.SignupButton onClick={props.onClickSignup}>
            가입하기
          </S.SignupButton>
        </S.SingupContainer>
      </S.SignupWrapper>
    </>
  );
}
