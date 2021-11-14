import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 87px;
  border-bottom: solid #bdbdbd 1px; ;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const CommentRapper = styled.div`
  margin-top: 40px;
`;
export const CommentSubmit = styled.div``;
export const CommentHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CommentPssword = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 10px;
  margin-right: 24px;
`;
export const CommentRating = styled.div``;
export const CommentBody = styled.div`
  border: solid #bdbdbd 1px;
`;

export const CommentBox = styled.input`
  width: 1200px;
  height: 64px;
  border: solid white 0px;
  margin-left: 10px;
`;
export const CommentContent = styled.div``;
export const CommentFooter = styled.div`
  height: 52px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: solid #f2f2f2 1px; ;
`;
export const ContentsCounter = styled.div`
  padding-left: 10px;
  font-size: 13px;
  color: #bdbdbd;
`;
export const CommentButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
`;
export const CommentListWrapper = styled.div`
  margin-top: 46px;
  border-bottom: solid #bdbdbd 1px;
`;
// export const WriterIcon = styled.div``;
export const CommentListMain = styled.div`
  margin-left: 10px;
`;
export const CommentListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentListLeft = styled.div`
  display: flex;
`;
export const CommentListRight = styled.div`
  display: flex;
`;
export const CommentWriter = styled.div`
  height: 24px;
`;
export const StarRating = styled.div`
  margin-left: 10px;
`;
export const CommentEdit = styled.button`
  font-size: 25px;
  margin-right: 10px;
  border: none;
  color: #bdbdbd;
  background-color: white;
  :hover {
    color: Black;
  }
`;
export const PostedComment = styled.div`
  margin-bottom: 5px;
`;
export const CommentDate = styled.div`
  padding-bottom: 10px;
  font-size: 13px;
`;
