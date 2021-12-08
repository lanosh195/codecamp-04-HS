import { useForm } from "react-hook-form";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); //서버에선 하지 않는다. =>브라우저에서만 임폴트

export default function WebEditorPage() {
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

  // if (process.browser) {
  //   console.log("나는 브라우저다");
  // } else {
  //   console.log("나는 프론트엔드 서버다");
  // }

  return (
    <>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("passwrd")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </>
  );
}
