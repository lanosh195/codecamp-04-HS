import { Title } from "../../board/detail/BoardDetail.styles";
import * as S from "../register/productregister.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./productregister.validation";

export default function ProductRegisterUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(props.onClickLogin)}>
        상품명:
        <input type="text" {...register("name")} />
        {/* type register는 이름일뿐 aaa로 넘겨도 props.aaa로 받으면 상관x*/}
        <div>{formState.errors.name?.message}</div>
        한줄평:
        <input type="text" {...register("remarks")} />
        <div>{formState.errors.remarks?.message}</div>
        상품 설명:
        <input type="text" {...register("contents")} />
        <div>{formState.errors.contents?.message}</div>
        가격:
        <input type="text" {...register("price")} />
        <div>{formState.errors.price?.message}</div>
        <button type="submit" name="등록하기" />
      </form>
      {/* <form onSubmit={handleSubmit(props.onClickSubmit)}>
        <Title>상품등록</Title>
        <S.Label>상품명</S.Label>
        <br />
        <S.Inputs type="text" register={register("name")} />
        <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
        <br />
        <S.Label>한줄 요약</S.Label>
        <br />
        <S.Inputs type="text" register={register("remarks")} />
        <S.ErrorMessage>{formState.errors.remarks?.message}</S.ErrorMessage>
        <br />
        <S.Label>상품 설명</S.Label>
        <br />
        <S.Inputs type="text" register={register("contents")} />
        <S.ErrorMessage>{formState.errors.contents?.message}</S.ErrorMessage>
        <br />
        <S.Label>판매 가격</S.Label>
        <br />
        <S.Inputs type="text" register={register("price")} />
        <S.ErrorMessage>{formState.errors.price?.message}</S.ErrorMessage>
        <br />
        <S.Label>태그</S.Label>
        <br />
        <S.Inputs type="text" />
        <br />
        <S.Label>사진 첨부</S.Label>
      </form>
      <button type="submit" name="등록하기">
        등록하기
      </button> */}
    </>
  );
}
