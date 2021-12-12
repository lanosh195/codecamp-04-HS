import * as S from "./MarketDetail.styles";
export default function MarketDetailUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.DetailLeft>
          <S.ItemImg
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
        </S.DetailLeft>
        <S.DetailRight>
          <S.RightHeader>
            <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>
            <S.ItemRemarks>{props.data?.fetchUseditem.remarks}</S.ItemRemarks>
            <S.ItemPrice>{props.data?.fetchUseditem.price}</S.ItemPrice>
            <S.ItemWon>원</S.ItemWon>
          </S.RightHeader>
          <S.ItemNotice>안내사항</S.ItemNotice>
          <div></div>
          <S.BasketBtn onClick={props.onClickBasket}>장바구니</S.BasketBtn>
          <S.BuyBtn>바로 구매하기</S.BuyBtn>
          <button onClick={props.onClickEdit}>수정하기</button>
        </S.DetailRight>
      </S.Wrapper>
    </>
  );
}