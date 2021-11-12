import { MyInput,MyButton } from "./BoardWrite.styles"

export default function BoardWriteUI2(props){

    console.log("aaaaaaaaaaa",props)
    return(
        <>
            작성자:<MyInput type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer }/><br/>
            제목:<MyInput type="text" onChange={props.ccc} defaultValue={props.data?.fetchBoard.title }/><br/>
            내용:<MyInput type="text" onChange={props.ddd} defaultValue={props.data?.fetchBoard.contents}/><br/>
            <MyButton onClick={props.isEdit ? props.xxx : props.bbb} xxx={props.fff} >게시물 {props?.isEdit ? "수정" : "등록"}하기</MyButton>

            
            {/* <div>{aaa}</div>
            <button onClick={zzz}>graphql-API 요청하기</button> */}
        </>
    )

}