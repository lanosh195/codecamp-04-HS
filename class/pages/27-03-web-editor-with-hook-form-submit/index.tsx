import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/type";
import { FormValues } from "../../src/components/units/24-06-react-hook-form/MyForm.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); //서버에선 하지 않는다. =>브라우저에서만 임폴트

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface FormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function WebEditorReactHookFormSubmitPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  function handleChange(value: string) {
    //value 자체가 event target value 라이브러리가 그렇게 만들어져 있음
    console.log(value);

    //register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br><p>" ? "" : value); //지워도 남아있는 태그들 처리!

    //onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능!!
    trigger("contents");
  }
  async function onClickSubmit(data: FormValues) {
    //wirter,password 등등 핸들 서브밋이 넣어줌!!
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
