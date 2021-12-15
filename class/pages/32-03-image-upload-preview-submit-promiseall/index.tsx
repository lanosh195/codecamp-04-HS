import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [myFiles, setMyFiles] = useState([]);

  function onChangefile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    //내 컴퓨터에서 파일 스스로 읽기 FileReader 나밖에 못봄
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //myFile을 가지고 url 만들어줌.
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(data.target?.result);
      setMyFiles((prev) => [...prev, file]);
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["", "", ""];
    //1. 파일 업로드
    if (myFiles.length) {
      // 각각 올리기 테스트
      // const start = performance.now();
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });

      // const end = performance.now();
      // console.log(end - start);

      //동시에 올리기 테스트
      const start = performance.now();
      const result = await Promise.all([
        //promise.all ([]) vs promise.race([...]) 가장 먼저 끝난 거 하나만 캐치
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);

      // result = [result1, result2, result3, ..., result 10]
      // result.map((el)=> el.data.uploadFile.url) => [url1, url2, url3, ... url10]
      // myimageUrls = result.map((el)=> el.data.uploadFile.url)
      // myImageUrls = result.map((el) => el.data.uploadFile.url);

      // const result1 = await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // myImageUrls[0] = result1.data?.uploadFile.url || "";
      // const result2 = await uploadFile({
      //   variables: {
      //     file: myFiles[1],
      //   },
      // });
      // myImageUrls[1] = result2.data?.uploadFile.url || "";
      // const result3 = await uploadFile({
      //   variables: {
      //     file: myFiles[2],
      //   },
      // });

      // myImageUrls[2] = result3.data?.uploadFile.url || "";
    }

    //2. 업로드 된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "myWriter",
          password: "1234",
          title: "myTitle",
          contents: "myContents",
          images: [...myImageUrls],
          // images: myImageUrls -> myimagesUrls 자체가 배열이라 그냥 써도 되고 스프레드 시켜줘도 됨.
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
