import axios from "axios";

export default function GraphqlRestPage() {
  async function onClickSubmit() {
    const result = await axios.post(
      "https://backend04.codebootcamp.co.kr/graphql",
      {
        query: `mutation createBoard {
            createBoard(
                createBoardInput:{
                    writer:"짱9",
                    password:"1234",
                    title:"목제",
                    contents: "내용"
                }
            ){
                _id
                writer
            }
        }`,
      }
    );
    console.log(result);
  }
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
