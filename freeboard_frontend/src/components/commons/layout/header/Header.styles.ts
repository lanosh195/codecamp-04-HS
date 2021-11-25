import styled from "@emotion/styled";

export const Header = styled.div`
  height: 152px;
  /* background-color: #21dfb6; */
  display: flex;
  justify-content: space-around;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-left: 150px;
  /* background-color: black; */
`;

export const HeaderLeft = styled.div``;

export const Button = styled.button`
  width: 84px;
  height: 28px;
  margin: 10px;
  font-size: 10px;
  background-color: white;
  border-radius: 10px;
  color: black;
  :hover {
    background-color: #de9ba1;
  }
`;
