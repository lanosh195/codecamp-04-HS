import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
`;
export const SearchBarWrapper = styled.div`
  margin-left: 150px;
`;
export const BestWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BestTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding-right: 120px;
  margin-top: 50px;
  color: #5729ff;
  margin-left: 40px;
`;
export const BestItemsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
`;
export const BestItems = styled.div`
  width: 249px;
  margin-right: 24px;
`;

export const BestItemsHeader = styled.div`
  border: solid black 1px;
  height: 320px;
  position: relative;
`;
export const BestItemsBody = styled.div``;
export const BestItemsImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const BestitemsName = styled.div`
  font-size: 18px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const BestitemsRemarks = styled.div`
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const BestitemsPrice = styled.div``;
export const BestitemsPickedCount = styled.div`
  font-size: 20px;
  position: absolute;
  z-index: 1;
`;
export const LikeImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 3px;
`;
export const ProductListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ItemsWrapper = styled.div`
  margin-top: 100px;
`;

export const InfiniteScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
export const Items = styled.div`
  width: 249px;
  margin-right: 24px;
  margin-bottom: 120px;
`;
export const ItemsHeader = styled.div`
  border: solid black 1px;
  height: 320px;
  position: relative;
`;
export const ItemsImg = styled.img`
  width: 100%;
  height: 100%;
  /* height: 90%;
  top: 10%; */
  position: absolute;
`;
export const ItemsName = styled.div`
  font-size: 18px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ItemsRemarks = styled.div`
  font-size: 18px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ItemsPrice = styled.div``;
export const ItemsPickedCount = styled.div`
  font-size: 20px;
  z-index: 1;
  position: absolute;
  right: 0;
`;
export const ItemsTitle = styled.h1`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  color: #5729ff;
  margin-left: 25%;
`;
export const RegisterBtn = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin: 150px 160px 0px 0px;
  position: absolute;
  right: 11%;
  background-color: #e6e1f2;

  :hover {
    cursor: pointer;
    color: white;
    background-color: #5729ff;
  }
`;

export const SearcIcon = styled(SearchOutlined)`
  color: #5729ff;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const Searchbar = styled.div`
  width: 376px;
  height: 52px;
  border-radius: 15px;
  background-color: #f5f2fc;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
  font-size: 20px;
`;
