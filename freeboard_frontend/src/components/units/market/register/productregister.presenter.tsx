import * as S from "../register/productregister.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./productregister.validation";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

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
          한줄요약:
          <S.Inputs
            type="text"
            placeholder="한줄요약을 입력해주세요."
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
          <div>
            {props.fileUrls.map((el, index) => (
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
              등록하기
            </S.SubmitButton>
          </S.ButtonWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}
