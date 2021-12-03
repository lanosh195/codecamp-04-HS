import Button01 from "../../buttons/01/Button01";
import Input01 from "../../inputs/input01";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./MyForm.validation";

export default function MyFormUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickLogin)}>
      이메일:
      <Input01 type="text" register={register("myEmail")} />
      {/* type register는 이름일뿐 aaa로 넘겨도 props.aaa로 받으면 상관x*/}
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호:
      <Input01 type="password" register={register("myPassword")} />
      {/* 비밀번호: <input type="password" {...props.register("myPassword")} /> */}
      <div>{formState.errors.myPassword?.message}</div>
      <Button01 type="submit" name="로그인하기" isValid={formState.isValid} />
      {/* <MyButton isValid={props.formState.isValid}>로그인 하기</MyButton> */}
      {/* <button type="button" onClick={onClickMove}>목록으로 이동하기</button> */}
      {/* 버튼 타입의 초기값은 submit */}
      {/* <button type="reset">초기화 하기</button> */}
    </form>
  );
}
