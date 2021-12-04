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
      <S.Wrapper>
        <S.Title>상품등록</S.Title>
        <form onSubmit={handleSubmit(props.onClickSubmit)}>
          상품명:
          <S.Inputs
            type="text"
            placeholder="상품명을 입력해주세요."
            {...register("name")}
          />
          {/* type register는 이름일뿐 aaa로 넘겨도 props.aaa로 받으면 상관x*/}
          <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
          한줄평:
          <S.Inputs
            type="text"
            placeholder="한줄평을 입력해주세요."
            {...register("remarks")}
          />
          <S.ErrorMessage>{formState.errors.remarks?.message}</S.ErrorMessage>
          상품 설명:
          <S.Contents
            type="text"
            placeholder="상품 설명을 입력해주세요."
            {...register("contents")}
          />
          <S.ErrorMessage>{formState.errors.contents?.message}</S.ErrorMessage>
          <div>가격:</div>
          <S.Price
            type="text"
            placeholder="가격을 입력해주세요."
            {...register("price")}
          />
          <S.ErrorMessage>{formState.errors.price?.message}</S.ErrorMessage>
          <S.ButtonWrapper>
            <S.SubmitButton type="submit" name="등록하기">
              등록하기
            </S.SubmitButton>
          </S.ButtonWrapper>
        </form>
      </S.Wrapper>
      {/* <form onSubmit={handleSubmit(props.onClickSubmit)}>
        <Title>상품등록</Title>
        <S.Label>상품명</S.Label>
        <br />
        <S.Inputs type="text" register={...register("name")} />
        <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
        <br />
        <S.Label>한줄 요약</S.Label>
        <br />
        <S.Inputs type="text" register={...register("remarks")} />
        <S.ErrorMessage>{formState.errors.remarks?.message}</S.ErrorMessage>
        <br />
        <S.Label>상품 설명</S.Label>
        <br />
        <S.Inputs type="text" register={...register("contents")} />
        <S.ErrorMessage>{formState.errors.contents?.message}</S.ErrorMessage>
        <br />
        <S.Label>판매 가격</S.Label>
        <br />
        <S.Inputs type="text" register={...register("price")} />
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
