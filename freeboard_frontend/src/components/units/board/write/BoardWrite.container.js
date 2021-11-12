import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useState } from 'react'
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/router'

export default function BoardWrite(props){
    const router = useRouter()

    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
  
    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");
  
    const [isActive, setIsActive] = useState(false)

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
  
    function onChangeMyWriter(event) {
      setMyWriter(event.target.value);
      if (event.target.value !== "") {
        setMyWriterError("");
      }

      if(event.target.value !== "" && myTitle !== "" && myContents !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyPassword(event) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
        setMyPasswordError("");
      }

      if(myWriter !== "" && myTitle !== "" && myContents !== "" && event.target.value !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyTitle(event) {
      setMyTitle(event.target.value);
      if (event.target.value !== "") {
        setMyTitleError("");
      }

      if(myWriter && event.target.value && myContents  && myPassword ){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyContents(event) {
      setMyContents(event.target.value);
      if (event.target.value !== "") {
        setMyContentsError("");
      }

      if(myWriter !== "" && myTitle !== "" && event.target.value !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    //등록버튼
    async function onClickSubmit() {
      if (!myWriter) {
        setMyWriterError("작성자를 입력해주세요.");
      }
      if (!myPassword) {
        setMyPasswordError("비밀번호를 입력해주세요.");
      }
      if (!myTitle) {
        setMyTitleError("제목을 입력해주세요.");
      }
      if (!myContents) {
        setMyContentsError("내용을 입력해주세요.");
      }
      if (myWriter && myPassword && myTitle && myContents) {
        const result = await createBoard({ 
          variables: { 
            createBoardInput: { 
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents
            }
          }
        });
        router.push(`/boards/${result.data.createBoard._id}`)
      }
    }

    //수정 버튼
    async function onClickUpdate() {

      const myVariables ={
        boardId : Number(router.query.boardId)
      }
      if (!myWriter) {
        setMyWriterError("작성자를 입력해주세요."),
        myVariables.writer=myWriter
      }
      if (!myPassword) {
        setMyPasswordError("비밀번호를 입력해주세요.");
        
      }
      if (!myTitle) {
        setMyTitleError("제목을 입력해주세요."),
        myVariables.title=myTitle
      }
      if (!myContents) {
        setMyContentsError("내용을 입력해주세요."),
        myVariables.contents=myContents
      }
      // if (myWriter && myPassword && myTitle && myContents) {
        {
        await updateBoard({ 
          variables: { 
            boardId: router.query.boardId,
            password: myPassword,
            updateBoardInput: { 
              title: myTitle,
              contents: myContents
            }
          }
        });
        router.push(`/boards/${router.query.boardId}`)
      }
    }

    return (
        <BoardWriteUI
          myWriterError={myWriterError}
          myPasswordError={myPasswordError}
          myTitleError={myTitleError}
          myContentsError={myContentsError}
          onChangeMyWriter={onChangeMyWriter}
          onChangeMyPassword={onChangeMyPassword}
          onChangeMyTitle={onChangeMyTitle}
          onChangeMyContents={onChangeMyContents}
          onClickSubmit={onClickSubmit}
          onClickUpdate={onClickUpdate}
          isActive={isActive}
          isEdit={props.isEdit}
          data={props.data}
        />
    )
}