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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: { page: 1 },
    }
  );

  function onClickRow(event) {
    // console.log(event.target.id);
    console.log(event.currentTarget.id);
  }

  return (
    <>
      <h1>이벤트버블링</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} id={el._id} onClick={onClickRow}>
            <span> {el.title} </span>
            <span> {el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
