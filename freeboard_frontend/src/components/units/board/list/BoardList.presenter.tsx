import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
  CommentPagination,
  BestBoardWrapper,
  BestBoard,
  BestBoardHeader,
  BestBoardTitle,
  BestBoardWriter,
  BestBoardDate,
  BestBoardCount,
  BestBoardBody,
  BestBoardContents,
  LikeCounter,
  LikeIcon,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      {/* 베스트 게시물 */}
      <BestBoardWrapper>
        {props.boardsBest?.fetchBoardsOfTheBest.map((el) => (
          <BestBoard key={el._id}>
            <BestBoardHeader src={"/images/a.jpg"}></BestBoardHeader>
            <BestBoardTitle id={el._id} onClick={props.onClickMoveToBestBoard}>
              {el.title}
            </BestBoardTitle>
            <BestBoardBody>
              <BestBoardContents>
                <BestBoardWriter>{el.writer}</BestBoardWriter>
                <BestBoardDate>{getDate(el.createdAt)}</BestBoardDate>
              </BestBoardContents>
              <LikeCounter>
                <LikeIcon>icon</LikeIcon>
                <BestBoardCount>{el.likeCount}</BestBoardCount>
              </LikeCounter>
            </BestBoardBody>
          </BestBoard>
        ))}
      </BestBoardWrapper>
      {/* 게시글 목록 */}
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      {/* 게시글 목록 페이지 네이션 */}
      <CommentPagination>
        <span onClick={props.onClickPrevPage} style={{ cursor: "pointer" }}>
          ←
        </span>
        {new Array(5).fill(1).map(
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
      </CommentPagination>
      <Footer>
        <Button onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
