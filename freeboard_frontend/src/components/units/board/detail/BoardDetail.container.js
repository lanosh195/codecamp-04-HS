import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_COMMENT,
  FETCH_COMMENT,
} from "./BoardDetail.queries";

export default function BoardDetail(props) {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createComment] = useMutation(CREATE_COMMENT);
  //게시글 정보
  const { data: data1 } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  //댓글 정보
  const { data: data2 } = useQuery(FETCH_COMMENT, {
    variables: {
      page: Number(router.query.boardId),
      boardId: router.query.boardId,
    },
  });

  const [commentWriter, setcommentWriter] = useState("");
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

  function onChangecommentWriter(event) {
    setcommentWriter(event.target.value);
  }

  function onChangecommentPassword(event) {
    setcommentPassword(event.target.value);
  }

  function onChangecommentContents(event) {
    setcommentContents(event.target.value);
  }
  //댓글 등록 버튼
  async function onClickSubmitComment() {
    // if (!commentWriter) {
    //   setcommentWriterError("작성자를 입력해주세요.");
    // }
    // if (!commentPassword) {
    //   setcommentPasswordError("비밀번호를 입력해주세요.");
    // }
    // if (!commentContents) {
    //   setcommentContentsError("내용을 입력해주세요.");
    // }
    if (commentWriter && commentPassword && commentContents) {
      const result2 = await createComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
          },
        },
      });
      router.push(`/boards/${result2.data.createBoardCommentInput._id}`);
    }
  }

  return (
    <BoardDetailUI
      data1={data1}
      data2={data2}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      onChangecommentWriter={onChangecommentWriter}
      onChangecommentPassword={onChangecommentPassword}
      onChangecommentContents={onChangecommentContents}
      onClickSubmitComment={onClickSubmitComment}
      data={props.data}
    />
  );
}
