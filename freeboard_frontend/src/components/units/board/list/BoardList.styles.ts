import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
    cursor: pointer;
  }
`;

export const CommentPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const BestBoardWrapper = styled.div`
  display: flex;
`;
export const BestBoard = styled.div`
  width: 282px;
  height: 257px;
  border: solid black 1px;
  border-radius: 5px;
  margin-right: 24px;
  /* background-color: black; */
`;
export const BestBoardHeader = styled.img`
  width: 282px;
  height: 120px;
  border-radius: 5px;
  border-bottom: solid black 1px;
  /* background-color: black; */
`;
export const BestBoardContents = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
export const BestBoardBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;
export const BestBoardTitle = styled.div`
  /* max-height: 80px; */
  margin: 24px 10px;
  font-size: 18px;
  cursor: pointer;
`;
export const BestBoardWriter = styled.div``;
export const LikeCounter = styled.div``;
export const BestBoardDate = styled.div`
  font-size: 12px;
`;
export const BestBoardCount = styled.div`
  margin-right: 10px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  color: gold;
  cursor: pointer;
`;
