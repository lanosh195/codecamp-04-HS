import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data1?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>{props.data1?.fetchBoard.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data1?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data1?.fetchBoard.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToUpdate}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
      {/* 댓글 화면 */}
      <S.CommentRapper>
        <S.CommentSubmit>
          <S.CommentHeader>
            <S.CommentPssword
              type="text"
              placeholder="작성자"
              onChange={props.onChangeCommentWriter}
            />
            <S.CommentPssword
              type="text"
              placeholder="비밀번호"
              onChange={props.onChangeCommentPassword}
            />
            <S.CommentRating></S.CommentRating>
          </S.CommentHeader>
          <S.CommentBody>
            <S.CommentBox
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예훼손
              ,무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은
              게시자에게 있습니다"
              onChange={props.onChangeCommentContents}
            />
            <S.CommentFooter>
              <S.ContentsCounter>0/100 카운터</S.ContentsCounter>
              <S.CommentButton onClick={props.onClickSubmitComment}>
                등록하기
              </S.CommentButton>
            </S.CommentFooter>
          </S.CommentBody>
        </S.CommentSubmit>
        <S.CommentListWrapper>
          {/* <S.WriterIcon>X</S.WriterIcon> */}
          <S.CommentListMain>
            <S.CommentListHeader>
              <S.CommentListLeft>
                <S.CommentWriter>댓글작성자</S.CommentWriter>
                <S.StarRating></S.StarRating>
              </S.CommentListLeft>
              <S.CommentListRight>
                <S.CommentEdit>✓</S.CommentEdit>
                <S.CommentEdit>✗</S.CommentEdit>
              </S.CommentListRight>
            </S.CommentListHeader>
            <S.PostedComment>댓글 내용</S.PostedComment>
            <S.CommentDate>
              날짜
            </S.CommentDate>
          </S.CommentListMain>
        </S.CommentListWrapper>
      </S.CommentRapper>
    </S.Wrapper>
  );
}
