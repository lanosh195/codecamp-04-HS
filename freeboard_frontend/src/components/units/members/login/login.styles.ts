import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 491px;
  max-width: 400px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const WrapperBody = styled.div`
  width: 100%;
  padding: 40px;
`;
export const ExitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-color: white;
  border: 0;
  font-size: 40px;
  font-weight: 100;
  color: black;
  :hover {
    cursor: pointer;
  }
  &::after {
    content: "X";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
`;
export const LoginForm = styled.div`
  width: 320px;
  height: 314px;
`;

export const Login = styled.div`
  width: 320px;
  height: 34px;
  color: white;
  text-align: center;
  font-size: 23px;
  word-spacing: 2px;
  font-weight: 500;
  color: white;
`;
export const UserNameWrapper = styled.div`
  width: 320px;
  height: 45px;
`;
export const UserEmail = styled.input`
  width: 320px;
  height: 45px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0);
  border-color: white;
`;
export const PasswordWrapper = styled.div`
  width: 320px;
  height: 45px;
`;
export const Password = styled.input`
  width: 320px;
  height: 45px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0);
  border-color: white;
`;
export const LoginBtnWrapper = styled.div`
  width: 320px;
  height: 40px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  color: black;
  :hover {
    cursor: pointer;
  }
  margin-bottom: 25px;
`;
export const Line = styled.div`
  width: 320px;
  border-bottom: 1px solid black;
  color: white;
  margin-bottom: 25px;
`;
export const LoginBot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignupWrapper = styled.div`
  width: 160px;
  height: 19px;
  display: flex;
  justify-content: end;
`;
export const Signup = styled.button`
  width: 100px;
  height: 19px;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
export const HomeWrapper = styled.div`
  width: 160px;
  height: 19px;
  display: flex;
  justify-content: start;
`;
export const Home = styled.button`
  width: 100px;
  height: 19px;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
export const Find = styled.button`
  width: 320px;
  height: 19px;
  margin-top: 3px;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
