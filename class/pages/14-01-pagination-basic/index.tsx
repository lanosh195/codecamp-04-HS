import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/type";

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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickPage(event) {
    refetch({ page: Number(event?.target.id) });
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span
          onClick={onClickPage}
          id={String(el)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {" "}
          {el}
        </span>
      ))}
    </>
  );
}
