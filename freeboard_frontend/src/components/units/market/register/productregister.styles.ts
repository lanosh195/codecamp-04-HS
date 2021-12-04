import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  /* display: flex;
  flex-direction: column; */
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.h1`
  font-size: 24px;
  display: flex;
  justify-content: center;
`;

export const Inputs = styled.input`
  width: 996px;
  height: 52px;
`;
export const Contents = styled.input`
  width: 996px;
  height: 400px;
`;
export const Price = styled.input`
  width: 300px;
  height: 52px;
`;
export const ErrorMessage = styled.div`
  width: 400px;
  height: 40px;
  color: red;

  /* background-color: grey; */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;

  :hover {
    cursor: pointer;
    color: white;
    background-color: #de9ba1;
  }
`;
