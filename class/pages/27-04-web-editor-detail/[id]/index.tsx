import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/type";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  return (
    <>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      {/* {process.browser ? ( */}
      {/* //     <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
    //   ) : (
    //     <div style={{ color: "green" }}></div> //빈 div라도 그려줘야함 색깔 넣어서
    //   )} */}

      <div style={{ color: "blueviolet" }}>제목: {data?.fetchBoard.title} </div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}

      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div />
      )}
    </>
  );
}
