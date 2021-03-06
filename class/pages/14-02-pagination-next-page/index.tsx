import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/type";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      title
      writer
      _id
    }
  }
`;

export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickPage(event) {
    refetch({ page: Number(event?.target.id) });
  }
  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }
  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span onClick={onClickPrevPage} style={{ cursor: "pointer" }}>
        이전페이지
      </span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {" "}
          {startPage + index}
        </span>
      ))}
      <span onClick={onClickNextPage} style={{ cursor: "pointer" }}>
        다음페이지
      </span>
    </>
  );
}
