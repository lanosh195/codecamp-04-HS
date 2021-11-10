import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD}from './BoardWrite.queries'
import {useMutation} from '@apollo/client'
import { useState } from 'react'
import {useRouter} from 'next/router'

export default function BoardWrite2(props){
        const router = useRouter()
        
        const [myqqq,setMyqqq]= useState(false)     
        // const [aaa,setAaa]= useState("메시지 가져오기")
        const [myWriter, setMyWriter]= useState("")
        const [myTitle, setMyTitle]= useState("")
        const [myContents, setMyContents]= useState("")
       
        
        const [createBoard]= useMutation(CREATE_BOARD)
        const [UpdateBoard] =useMutation(UPDATE_BOARD)
        
        
        function onChangeMyWriter(event){
            setMyWriter(event.target.value)
            checkContents()
        }
    
        function onChangeMyTitle(event){
            setMyTitle(event.target.value)
            checkContents()
        }
        
        function onChangeMyContents(event){
            setMyContents(event.target.value)
            checkContents()
        }

        

        function checkContents(){
            if (myWriter!=="" && myTitle!=="" && myContents!==""){
                setMyqqq(true)
            }

        }
    
        async function zzz() {
            // alert("등록하기 버튼")
            const result= await createBoard({
                variables: {writer: myWriter, title: myTitle, contents: myContents}
            })
            console.log(result)
            console.log(result.data.createBoard.message)
            // setAaa(result.data.createBoard.message)
            router.push(`/08-06-boards/${result.data.createBoard.number}`)
        } 

        async function xxx() {
            // alert("수정하기 버튼")
            const result= await UpdateBoard({
                variables: {number:Number(router.query.myNumber), writer: myWriter, title: myTitle, contents:myContents}
            })
            router.push(`/08-06-boards/${router.query.myNumber}`)
            
        }
    
    return(
        <BoardWriteUI 
        aaa={onChangeMyWriter}
        bbb={zzz}
        ccc={onChangeMyTitle}
        ddd={onChangeMyContents}
        fff={myqqq}
        isEdit={props.isEdit}
        xxx={xxx}
        />
    )

}