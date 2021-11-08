import PresenterPage from './BoardWrite.presenter'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from "next/router"
import { CREATE_BOARD } from './BoardWirte.queries'



export default function ContainerPage(){
    
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
    
    
    // 게시물 등록하기


    
     
    
    function onChangeWriter(event){
        setWriter(event.target.value)
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
    }
    
    function onChangeContents(event){
            setContents(event.target.value)
    }

        
    
    function onChangeWriter(event){
        setWriter(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }
    
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    function onChangeContents(event) {
        setContents(event.target.value)
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
        />
    )
} 