import * as S from "./singup.styles";
export default function SignupUIPage() {
  return (
    <>
      <S.SignupWrapper>
        <div>이메일</div>
        <S.InputBox
          type="text"
          placeholder="아이디를 입력해주세요."
          name="id"
        />
        <div>이름</div>

        <S.InputBox
          type="text"
          placeholder="email을 입력해주세요."
          name="email"
        />
        <div>닉네임</div>
        <S.InputBox
          type="text"
          placeholder="닉네임을 입력해주세요."
          name="nickname"
        />
        <div>이름</div>
        <S.InputBox type="text" placeholder="이름을 입력해주세요" name="name" />
        <div>비밀번호</div>
        <S.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
        />
        <div>비밀번호 확인</div>

        <S.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password2"
        />
        <br />
        <S.SignupButton>가입하기</S.SignupButton>
      </S.SignupWrapper>
    </>
  );
}
