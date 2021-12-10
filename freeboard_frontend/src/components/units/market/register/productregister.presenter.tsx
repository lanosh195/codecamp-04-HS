import * as S from "../register/productregister.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./productregister.validation";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductRegisterUI(props: any) {
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  function handleChange(value: string) {
    console.log(value);
    setValue("contents", value === "<p><br><p>" ? "" : value);
    trigger("contents");
  }
  return (
    <>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품수정" : "상품등록"}</S.Title>

        <form
          onSubmit={
            props.isEdit
              ? handleSubmit(props.onClickUpdate)
              : handleSubmit(props.onClickSubmit)
          }
        >
          상품명:
          <S.Inputs
            type="text"
            placeholder="상품명을 입력해주세요."
            {...register("name")}
            defaultValue={props.isEdit && props.data?.fetchUseditem.name}
          />
          <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
          한줄요약:
          <S.Inputs
            type="text"
            placeholder="한줄요약을 입력해주세요."
            {...register("remarks")}
            defaultValue={props.isEdit && props.data?.fetchUseditem.remarks}
          />
          <S.ErrorMessage>{formState.errors.remarks?.message}</S.ErrorMessage>
          상품 설명:
          <S.Contents
            // defaultValue={props.isEdit && props.data?.fetchUseditem.contents}
            onChange={handleChange}
          />
          {/* <S.ErrorMessage>{formState.errors.contents?.message}</S.ErrorMessage> */}
          <div>가격:</div>
          <S.Price
            type="text"
            placeholder="가격을 입력해주세요."
            {...register("price")}
            defaultValue={props.isEdit && props.data?.fetchUseditem.price}
          />
          <S.ErrorMessage>{formState.errors.price?.message}</S.ErrorMessage>
          <div>
            {props.fileUrls.map((el: any, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                defaultFileUrl={props.data?.fetchBoard.images?.[index]}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </div>
          <S.ButtonWrapper>
            <S.SubmitButton type="submit" name="등록하기">
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
            ˜
          </S.ButtonWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}
