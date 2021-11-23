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
`;

export const HeaderLeft = styled.div``;

export const Button = styled.button`
  width: 64px;
  height: 24px;
  margin: 10px;
  font-size: 10px;
  background-color: white;
  border-radius: 10px;
  color: black;
  :hover {
    background-color: #de9ba1;
  }
`;
