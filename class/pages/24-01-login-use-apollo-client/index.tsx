import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/type";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient(); // 이 client를 axois라고 생각하면 편함

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });

    ///로컬 스토리지에 토큰 넣어주기!!!!!
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem("accessToken", accessToken || "");
    setAccessToken(accessToken || "");

    //const result = await axois.get("~")     -- 이러한 방식으로 원하는 곳에서 useQuery 필요!!
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }, //헤더에 베어러 방식으로 토큰 요청했지만 안들어온 상태라서 강제로 넣어줘야 함
    });
    setUserInfo(resultUserInfo.data.fetchUserLoggedIn);
    //const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)

    router.push("/24-02-login-success");

    //heaser authorizaion에 추가 시키는 거 app.tsx에서
  }
  return (
    <>
      이메일: <input type="text" onChange={onChangeMyEmail} />
      비밀번호: <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}
