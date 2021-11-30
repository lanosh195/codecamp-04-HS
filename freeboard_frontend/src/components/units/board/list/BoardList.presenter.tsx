import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import { v4 as uuid } from "uuid";

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      {/* 베스트 게시물 */}
      <S.BestBoardWrapper>
        {props.boardsBest?.fetchBoardsOfTheBest.map((el: any) => (
          <S.BestBoard key={el._id}>
            <S.BestBoardHeader src={"/images/a.jpg"}></S.BestBoardHeader>
            {/* {el.images[0] ? (
              <S.BestBoardHeader
                src={`https://storage.googleapis.com/${el?.images[0]}`}
              />
            ) : (
              <S.BestBoardHeader src={"/images/a.jpg"}></S.BestBoardHeader>
            )} */}
            <S.BestBoardTitle
              id={el._id}
              onClick={props.onClickMoveToBestBoard}
            >
              {el.title}
            </S.BestBoardTitle>
            <S.BestBoardBody>
              <S.BestBoardContents>
                <S.BestBoardWriter>{el.writer}</S.BestBoardWriter>
                <S.BestBoardDate>{getDate(el.createdAt)}</S.BestBoardDate>
              </S.BestBoardContents>
              <S.LikeCounter>
                <S.LikeIcon>icon</S.LikeIcon>
                <S.BestBoardCount>{el.likeCount}</S.BestBoardCount>
              </S.LikeCounter>
            </S.BestBoardBody>
          </S.BestBoard>
        ))}
      </S.BestBoardWrapper>
      {/* 게시글 목록 */}
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.myKeyword, `#$%${props.myKeyword}#$%`)
              .split("#$%")
              .map((el) => (
                <S.MyWord key={uuid()} isMatched={props.myKeyword === el}>
                  {el}
                </S.MyWord>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <input type="text" onChange={props.onChangeSearch} />
      {/* 게시글 목록 페이지 네이션 */}
      <S.Footer>
        <S.CommentPagination>
          <span onClick={props.onClickPrevPage} style={{ cursor: "pointer" }}>
            ←
          </span>
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <span
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                  style={{ margin: "10px", cursor: "pointer" }}
                >
                  {" "}
                  {props.startPage + index}
                </span>
              )
          )}
          <span onClick={props.onClickNextPage} style={{ cursor: "pointer" }}>
            →
          </span>
        </S.CommentPagination>

        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
