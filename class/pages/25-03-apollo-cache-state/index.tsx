import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/type";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard; //삭제된 게시글 ID  (플레이 그라운드 확인)

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              //캐쉬 안의 필드들 중 페치보드를 수정!

              //기존의 fetchBoards 10개에서, 방금 삭제한 ID 제외한 9개 만들어서 돌려주기
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId //리드필드를 이용해서 id를 찾기 ,el에서
              ); //10개

              return [...newFetchBoards]; //배열이나 객체 리턴해줄 땐 얕은복사 해서 넘겨주자.
              // return 변화될 데이터-fetchBoards
            },
          },
        });
      },
    });
  };
  //   const onClickDelete =(myBoardId:string)=>()=> {
  //       deleteBoard({
  //           variables: {
  //               boardId: myBoardId
  //           }
  //       })
  //   }
  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "짱구",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              //추가된 createBoard 결과물과 기존 것 10개를 합쳐서 11개로 돌려주기
              return [data.createBoard, ...prev]; //순서만 바꾸면 최근 것이 위로도 밑으로도 가게 할 수 있음
              // return 변경될 데이터 -fetchBaords
            },
          },
        });
      },
    });
    //등록하기
  }
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el.id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
