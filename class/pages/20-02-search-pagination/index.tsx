import { ChangeEvent, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/type";

const FETCH_BAORDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPaginationPage() {
  const [mySearch, serMySearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BAORDS);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    serMySearch(event.target.value);
  }
  function onClickSearch() {
    //mySearch 키워드로 fetchBoard 요청하기!
    refetch({ search: mySearch });
  }
  return (
    <>
      <h1>검색 페이지!!!</h1>
      검색어 입력:
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>{el.title}</span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={}>{index + 1}</span>
      ))}
    </>
  );
}
