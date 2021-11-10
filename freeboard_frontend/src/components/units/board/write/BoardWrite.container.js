import PresenterPage from './BoardWrite.presenter'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from "next/router"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'




export default function ContainerPage(props){
    
    const [chk,setChk]= useState(false)
    
    const router=useRouter()
    const [createBoard]=useMutation(CREATE_BOARD);
    const [UpdateBoard]=useMutation(UPDATE_BOARD);

    const [writer, setWriter]= useState("");
    const [password, setPassword]=useState("");
    const [title, setTitle]= useState("");
    const [contents, setContents]=useState("");

    const [writerError,setWriterError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [titleError,setTitleError]=useState("");
    const [contentsError,setContentsError]=useState("");
    
    
    function onChangeWriter(event) {
        setWriter(event.target.value);
        if (event.target.value !== "") {
            setWriterError("");
        }
    }

    function onChangePassword(event){
        setPassword(event.target.value);
        if (event.target.value !==""){
            setPasswordError("");
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
        if (event.target.value !==""){
            setTitleError("");
        }
    }
    
    function onChangeContents(event){
            setContents(event.target.value);
            if (event.target.value !==""){
                setContentsError("");
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
        if (chkWriter && chkPassword && chkTitle && chkContenes){
            setChk(true)
        }else{
            setChk(false)
        }
    

    }

    async function Check(){
        

        if(!writer){
            setWriterError("이름을 입력해주세요")
        }   
        if(!password){
            setPasswordError("비밀번호를 입력해주세요")
        }   
        if(!title){
            setTitleError("제목을 입력해주세요")
        }   
        if(!contents){
            setContentsError("내용을 입력해주세요")
        }   

        if(writer && password && title && contents){
        const result= await createBoard({
            variables: {
                createBoardInput:{
                    writer/*:writer*/,
                    password,
                    title,
                    contents:contents
                }
            }
        })
        console.log(result)
        router.push(`/boards/${result.data.createBoard._id}`)
        }

        
    }
    async function Edit() {
        // alert("수정하기 버튼")
        const result= await UpdateBoard({
            variables: {
                boardId : router.query.boardId, 
                updateBoardInput : {
                title: title, 
                contents:contents
                },
                password : password
            }
        })
        router.push(`/board/${router.query.boardId}`)
        
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
            isEdit={props.isEdit}
            Edit={Edit}
        />
    )
} 


