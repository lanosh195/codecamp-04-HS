import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { IMutation } from "../../src/commons/types/generated/type";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
      writer
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [imageuUl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState();

  function onChangefile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    //내 컴퓨터에서 파일 스스로 읽기 FileReader 나밖에 못봄
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //myFile을 가지고 url 만들어줌.
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(data.target?.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    let myImageUrl = "";
    //1. 파일 업로드
    if (myFile) {
      const result1 = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }

    //2. 업로드 된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "myWriter",
          password: "1234",
          title: "myTitle",
          contents: "myContents",
          // images: [result1.data?.uploadFile.url],
          images: [myImageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }
  return (
    <>
      <img src={imageuUl} />
      <input type="file" onChange={onChangefile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
