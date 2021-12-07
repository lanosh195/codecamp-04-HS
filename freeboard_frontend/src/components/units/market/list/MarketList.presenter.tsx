import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
export default function MarketListUI(props) {
  // console.log(props.data);
  // console.log(props.fetchBest);
  const { moveToPage } = useMoveToPage();
  return (
    <>
      <S.Wrapper>
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
        <div>
          <S.BestTitle>베스트 상품</S.BestTitle>
          {/* 베스트 상품 맵으로 뿌리기 */}
          <S.BestItemsWrapper>
            {props.fetchBest?.fetchUseditemsOfTheBest.map((el: any) => (
              <S.BestItems key={el._id}>
                <S.BestItemsHeader>
                  <S.BestItemsImg
                    src={`https://storage.googleapis.com/${el.images}`}
                    onError={props.onErrorImg}
                  />
                  <S.BestitemsPickedCount>
                    <S.LikeImg src="/images/like.png" />
                    {el.pickedCount}
                  </S.BestitemsPickedCount>
                </S.BestItemsHeader>
                <S.BestItemsBody>
                  <S.BestitemsName>{el.name}</S.BestitemsName>
                  <S.BestitemsRemarks>한줄평:{el.remarks}</S.BestitemsRemarks>
                  <S.BestitemsPrice>{el.price}원</S.BestitemsPrice>
                </S.BestItemsBody>
              </S.BestItems>
            ))}
          </S.BestItemsWrapper>
        </div>

        <div>
          {/* 상품들 인피니티 스크롤로 뿌리기*/}
          <S.ItemsTitle>상품 목록</S.ItemsTitle>
          <S.ItemsWrapper
            style={{ width: "1150px", height: "600px", overflow: "auto" }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              <S.InfiniteScrollWrapper>
                {props.data?.fetchUseditems.map((el: any) => (
                  <S.Items key={el._id}>
                    <S.ItemsHeader>
                      <S.ItemsImg
                        src={`https://storage.googleapis.com/${el.images}`}
                        onError={props.onErrorImg}
                      />
                      <S.ItemsPickedCount>
                        <S.LikeImg src="/images/like.png" />
                        {el.pickedCount}
                      </S.ItemsPickedCount>
                    </S.ItemsHeader>
                    <S.BestItemsBody>
                      <S.BestitemsName>{el.name}</S.BestitemsName>

                      <S.BestitemsRemarks>
                        한줄평:{el.remarks}
                      </S.BestitemsRemarks>
                      <S.BestitemsPrice>{el.price}원</S.BestitemsPrice>
                    </S.BestItemsBody>
                  </S.Items>
                ))}
              </S.InfiniteScrollWrapper>
            </InfiniteScroll>
          </S.ItemsWrapper>
        </div>
        <S.RegisterBtn onClick={moveToPage("/boards/market/new")}>
          상품 등록하기
        </S.RegisterBtn>
      </S.Wrapper>
    </>
  );
}
