import PresenterPage from './BoardWrite.presenter'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from "next/router"
import { CREATE_BOARD } from './BoardWirte.queries'



export default function ContainerPage(){
    
    const [chk,setChk]= useState(false)

    const router=useRouter()
    const [createBoard]=useMutation(CREATE_BOARD)

    const [writer, setWriter]= useState("")
    const [password, setPassword]=useState("")
    const [title, setTitle]= useState("")
    const [contents, setContents]=useState("")

    const [writerError,setWriterError]=useState("")
    const [passwordError,setPasswordError]=useState("")
    const [titleError,setTitleError]=useState("")
    const [contentsError,setContentsError]=useState("")
    
    
    function onChangeWriter(event){
        setWriter(event.target.value);
        if (event.target.value !==""){
            setWriterError("");
        }
    }  

    

    function onChangePassword(event){
        setPassword(event.target.value)
        if (event.target.value !==""){
            setPasswordError("")
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
        if (event.target.value !==""){
            setTitleError("")
        }
    }
    
    function onChangeContents(event){
            setContents(event.target.value)
            if (event.target.value !==""){
                setContentsError("")
            }
    }

    

    function onChangeWriter(event){
        const chkWriter = event.target.value;
        setWriter(chkWriter)
        checkcontents(chkWriter , password , title, contents)
        
    }

    function onChangePassword(event) {
        const chkPassword = event.target.value;
        setPassword(event.target.value)
        checkcontents(writer , chkPassword , title, contents)
        
    }
    
    function onChangeTitle(event) {
        const chkTitle = event.target.value;
        setTitle(event.target.value);
        checkcontents(writer, password, chkTitle, contents)
        
    }
    
    function onChangeContents(event) {
        const chkContents = event.target.value;
        setContents(event.target.value)
        checkcontents(writer, password, title, chkContents)
        
    }

    function checkcontents(chkWriter , chkPassword , chkTitle , chkContenes){
        if (chkWriter!=="" && chkPassword!=="" && chkTitle!=="" && chkContenes!==""){
            setChk(true)
        }else{
            setChk(false)
        }
    

    }

    async function Check(){
        

        if(writer.length===0){
            setWriterError("이름을 입력해주세요")
        }   else{
            setWriterError("")
        }
        if(password.length===0){
            setPasswordError("비밀번호를 입력해주세요")
        }   else{
            setPasswordError("")
        }
        if(title.length===0){
            setTitleError("제목을 입력해주세요")
        }   else{
            setTitleError("")
        }
        if(contents.length===0){
            setContentsError("내용을 입력해주세요")
        }   else{
            setContentsError("")
        }
        const result= await createBoard({
            variables: {
                createBoardInput:{
                    writer:writer,
                    password:password,
                    title:title,
                    contents:contents
                }
            }
        })
        console.log(result)
        router.push('routed-product-read/'+result.data.createBoard._id)

        
    }

    return(
        <PresenterPage
            oCW={onChangeWriter}
            oCT={onChangeTitle}
            oCC={onChangeContents}
            oCP={onChangePassword}
            cHK={Check}
            aaa={writerError}
            bbb={passwordError}
            ccc={titleError}
            ddd={contentsError}
            fff={chk}
        />
    )
} 


// function onChangeMyWriter(event) {
//     setMyWriter(event.target.value);
//     if (event.target.value !== "") {
//       setMyWriterError("");
//     }
//   }

//   function onChangeMyPassword(event) {
//     setMyPassword(event.target.value);
//     if (event.target.value !== "") {
//       setMyPasswordError("");
//     }
//   }

//   function onChangeMyTitle(event) {
//     setMyTitle(event.target.value);
//     if (event.target.value !== "") {
//       setMyTitleError("");
//     }
//   }

//   function onChangeMyContents(event) {
//     setMyContents(event.target.value);
//     if (event.target.value !== "") {
//       setMyContentsError("");
//     }
//   }

//   async function onClickSubmit() {
//     if (myWriter === "") {
//       setMyWriterError("작성자를 입력해주세요.");
//     }
//     if (myPassword === "") {
//       setMyPasswordError("비밀번호를 입력해주세요.");
//     }
//     if (myTitle === "") {
//       setMyTitleError("제목을 입력해주세요.");
//     }
//     if (myContents === "") {
//       setMyContentsError("내용을 입력해주세요.");
//     }
//     if (myWriter !== "" && myPassword !== "" && myTitle !== "" && myContents !== "")