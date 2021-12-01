import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SignupUIPage from "./singup.presenter";
import { CREATE_USER } from "./singup.queries";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [password2, setPassword2] = useState("");

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value !== "") {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
    }
  }
  function onChangePassword2(event: ChangeEvent<HTMLInputElement>) {
    setPassword2(event.target.value);
  }
  async function onClickSignup() {
    if (!/\w+@\w+\.\w+/.test(inputs.email)) {
      alert("이메일 주소가 잘못되었습니다.");
    }
    if (inputs.password !== password2) {
      alert("비밀번호가 일치하지 않습니다");
    }
    if (
      inputs &&
      inputs.password === password2 &&
      /\w+@\w+\.\w+/.test(inputs.email)
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...inputs,
            },
          },
        });
        console.log(result);
        alert("회원가입이 완료되었습니다.");
        router.push("/boards/login");
      } catch (error) {
        alert("회원가입에 실패했습니다.");
      }
    }
  }

  // function PhoneNumberCheck() {
  //   let PhoneNumberCk = /^\d{3}-\d{3,4}-\d{4}$/;
  //   if (!PhoneNumberCk.test(String(PhoneNumber))) {
  //     alert("번호를 확인해 주세요.");
  //   }
  // }

  return (
    <SignupUIPage
      onChangeInputs={onChangeInputs}
      onChangePassword2={onChangePassword2}
      onClickSignup={onClickSignup}
    />
  );
}
