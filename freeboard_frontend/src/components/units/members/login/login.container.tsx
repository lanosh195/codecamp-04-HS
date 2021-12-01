import { useState, useContext, ChangeEvent } from "react";
import LoginPageUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

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
    setAccessToken(result.data?.loginUser.accessToken);

    router.push("/boards");
    console.log(result);
  }
  function MoveHome() {
    router.push("/boards");
  }

  return (
    <LoginPageUI
      // onClickLogin={onClickLogin}
      Login={onClickLogin}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      MoveHome={MoveHome}
    />
  );
}
