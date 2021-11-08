import { MyInput,MyButton } from "./BoardWirte.styles"

export default function BoardWriteUI(props){

    console.log(props)
    return(
        <>
            작성자:<MyInput type="text" onChange={props.aaa}/><br/>
            제목:<MyInput type="text" onChange={props.ccc}/><br/>
            내용:<MyInput type="text" onChange={props.ddd}/><br/>
            <MyButton onClick={props.bbb} xxx={props.fff}>게시물 등록하기</MyButton>

            {/* <div>{aaa}</div>
            <button onClick={zzz}>graphql-API 요청하기</button> */}
        </>
    )

}