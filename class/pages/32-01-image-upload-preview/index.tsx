import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageuUl, setImageUrl] = useState("");
  function onChangefile(event: any) {
    const myFile = event.target.files[0];
    console.log(myFile);
    //내 컴퓨터에서 파일 스스로 읽기 FileReader 나밖에 못봄
    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile); //myFile을 가지고 url 만들어줌.
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(data.target?.result);
    };
  }
  return (
    <>
      <img src={imageuUl} />
      <input type="file" onChange={onChangefile} />
    </>
  );
}
