import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
export default function MarketListUI(props: any) {
  // console.log(props.data);
  console.log(props.fetchBest);
  const { moveToPage } = useMoveToPage();
  return (
    <>
      <S.Wrapper>
        <div>
          <S.BestTitle>베스트 상품</S.BestTitle>
          {/* 베스트 상품 맵으로 뿌리기 */}
          <S.BestItemsWrapper>
            {props.fetchBest?.fetchUseditemsOfTheBest.map((el: any) => (
              <S.BestItems key={el._id}>
                <S.BestItemsHeader
                  id={el._id}
                  onClick={props.onClickMoveItemDetail}
                >
                  <S.BestItemsImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
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
          <S.ItemsTitle>상품 목록</S.ItemsTitle>
          <S.Searchbar onKeyPress={props.onPressEnter}>
            <S.SearcIcon onClick={props.onClickSearch} />
            <S.SearchbarInput
              type="text"
              onChange={props.onChangeSearch}
            ></S.SearchbarInput>
          </S.Searchbar>
          {console.log(props.data?.fetchUseditems)}
          {props.data?.fetchUseditems.map((el: any) => (
            <div key={el._id}></div>
          ))}
          {/* {new Array(10).fill(1).map((_, index) => (
            <span
              key={uuidv4()}
              onClick={props.onClickPage}
              id={String(index + 1)}
            >
              {index + 1}
            </span>
          ))} */}
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
                    <S.ItemsHeader
                      id={el._id}
                      onClick={props.onClickMoveItemDetail}
                    >
                      <S.ItemsImg
                        src={`https://storage.googleapis.com/${el.images[0]}`}
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

        <S.RegisterBtn onClick={moveToPage("/market/new")}>
          상품 등록하기
        </S.RegisterBtn>
      </S.Wrapper>
    </>
  );
}
