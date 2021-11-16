import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARD_COMMENTS,
  FETCH_COMMENT,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT
} from "./BoardDetail.queries";

export default function BoardDetail(props) {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  // const [fetchBoardComment] = useQuery(FETCH_BOARD_COMMENTS);  
  const { data: data1 } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  //댓글 정보
  const { data: data2 } = useQuery(FETCH_COMMENT, {
    variables: {
      // page: Number(router.query.boardId),
      boardId: router.query.boardId,
    },
  });

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setcommentPassword] = useState("");
  const [commentContents, setcommentContents] = useState("");

  function onClickMoveToList() {
    router.push("/boards");
  }

  function onClickMoveToUpdate() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardId } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  function onChangeCommentWriter(event) {
    setCommentWriter(event.target.value);
  }

  function onChangeCommentPassword(event) {
    setcommentPassword(event.target.value);
    
  }

  function onChangeCommentContents(event) {
    setcommentContents(event.target.value);
    console.log(event.target.value)
  }
  //댓글 등록 버튼
  async function onClickSubmitComment() {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: 0,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      console.log(result)
    } catch (error) {
      alert(error.message);
    }
  }


  async function onClickUpdate() {
    if (!myContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!myPassword) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: myContents },
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailUI
      data1={data1}
      data2={data2}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onClickSubmitComment={onClickSubmitComment}
      data={props.data}
      ocClicUpdate={onClickUpdate}
    />
  );
}
