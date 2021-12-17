import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/type";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "61bab192717be5002baa755c" },
    }
  );
  function onClickOptimisticUi() {
    likeBoard({
      variables: { boardId: "61bab192717be5002baa755c" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "61bab192717be5002baa755c",
      //       },
      //     },
      //   ],  //리패치 될 때까지 기다려야함
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },

      //data가 바로 오지 않고 아폴로 캐시스테이트에 저장 되었다 오는데
      //그 캐시스테이트 가져옴!!
      update(cache, { data }) {
        //요기 데이터는 최종 라이크 보드에 있는 데이터

        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61bab192717be5002baa755c" },
          data: {
            fetchBoard: {
              _id: "61bab192717be5002baa755c",
              __typename: "Board",
              likeCount: data?.likeBoard, // optimisitic으로 받은 가짜 데이터가 먼저 들어왔다가
              // 실제로 백엔드를 거쳐 온 진짜 데이터가 또 들어옴 2번 업데이트 됨
            },
          },
        });
      },
    });
  }
  return (
    <>
      <div>좋아요 개수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 올리기</button>
    </>
  );
}
