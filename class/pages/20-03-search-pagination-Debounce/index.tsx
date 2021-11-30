import { ChangeEvent, MouseEvent, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/type";
import { v4 as uuidv4 } from "uuid";

const FETCH_BAORDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPaginationDebouncePage() {
  // const [mySearch, serMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BAORDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value); ///////<이게 마이서치 역할하게 됨
    // serMySearch(event.target.value);
  }
  // function onClickSearch() {
  //   //mySearch 키워드로 fetchBoard 요청하기!
  //   refetch({ search: mySearch, page: 1 }); //쿼리에도 page 추가 해줘야함
  //   setMyKeyword(mySearch);
  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: myKeyword, page: Number(event.target.id) });
  }
  return (
    <>
      <h1>검색 페이지!!!</h1>
      검색어 입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>{el.title}</span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
