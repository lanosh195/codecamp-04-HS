import * as S from "./MarketDetail.styles";
export default function MarketDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.DetailLeft>
          <S.ItemImg
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
          {props.data?.fetchUseditem.useditemAddress?.address ? (
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
          ) : (
            <div>거래 장소가 등록되지 않았습니다.</div>
          )}
        </S.DetailLeft>
        <S.DetailRight>
          <S.RightHeader>
            <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>
            <S.ItemRemarks>{props.data?.fetchUseditem.remarks}</S.ItemRemarks>
            <S.ItemPrice>{props.data?.fetchUseditem.price}</S.ItemPrice>
            <S.ItemWon>원</S.ItemWon>

            <button onClick={props.onClickPick}>찜하기</button>
            {props.data?.fetchUseditem.pickedCount}
            {props.isPicked ? (
              <S.LikeImg src="/images/eheart.png" />
            ) : (
              <S.LikeImg src="/images/heart1.png" />
            )}
          </S.RightHeader>
          <S.ItemNotice>안내사항</S.ItemNotice>
          <div></div>

          <S.BasketBtn onClick={props.onClickBasket}>장바구니</S.BasketBtn>
          <S.BuyBtn
            onClick={props.onClickBuyItem}
            // onClick={props.onClickBuyItem(props.data?.fetchUseditem._id)}
          >
            바로 구매하기
          </S.BuyBtn>
          <button onClick={props.onClickEdit}>수정하기</button>
          <button onClick={props.onClickDelete}>삭제하기</button>
        </S.DetailRight>
      </S.Wrapper>
    </>
  );
}
