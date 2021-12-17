import { ChangeEvent, useCallback, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const inputsInit = {
  writer: "", //defaultInputs / inputsInit
  password: "",
  title: "",
  contents: "",
};

export default function IsSubmittingPage() {
  // const {formState}= useForm()
  // formState.isSubmitting           유즈폼에 내장되어 있음.

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState(inputsInit);

  async function onClickSubmit() {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      console.log(result);
      Modal.confirm({ content: "등록에 성공하였습니다" });
      //router.push로 다이나믹 라우팅 => result.data.createBoard._id
    } catch (error) {
      Modal.error({ content: error.message });
    }

    setIsSubmitting(false);
  }
  //   const onChangeInput = (name) => (event) => {
  //     setInputs((prev) => {
  //       //객체의 중괄호가 아니고 함수의 중괄호기 때문에 안쪾에서 리턴해줘야함
  //       return {
  //         ...prev,
  //         [name]: event.target.value,
  //       };
  //     });
  //   };

  const onChangeInput = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        //객체의 중괄호 만들어 주기 위해서 밖에 소괄호
        ...prev,
        [name]: event.target.value,
      }));
    },
    []
  );
  return (
    <>
      작성자:
      <input type="text" onChange={onChangeInput("writer")} />
      <br />
      비밀번호:
      <input type="password" onChange={onChangeInput("password")} />
      <br />
      제목:
      <input type="text" onChange={onChangeInput("title")} />
      <br />
      내용:
      <input type="text" onChange={onChangeInput("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </>
  );
}
