import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD}from './BoardWirte.queries'
import {useMutation} from '@apollo/client'
import { useState } from 'react'

export default function BoardWrite(){
        const [myqqq,setMyqqq]= useState(false)     
        
    // const [aaa,setAaa]= useState("메시지 가져오기")
        const [myWriter, setMyWriter]= useState("")
        const [myTitle, setMyTitle]= useState("")
        const [myContents, setMyContents]= useState("")
                       
        
        const [createBoard]= useMutation(CREATE_BOARD)
        
        
        
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
            const result= await createBoard({
                variables: {writer: myWriter, title: myTitle, contents: myContents}
            })
            console.log(result)
            console.log(result.data.createBoard.message)
            // setAaa(result.data.createBoard.message)
        } console.log(myqqq)
    
    return(
        <BoardWriteUI 
        aaa={onChangeMyWriter}
        bbb={zzz}
        ccc={onChangeMyTitle}
        ddd={onChangeMyContents}
        fff={myqqq}
        
        />
    )

}