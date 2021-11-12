import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD}from './BoardWrite.queries'
import {useMutation} from '@apollo/client'
import { useState } from 'react'
import {useRouter} from 'next/router'

export default function BoardWrite3(props){
    console.log("dddd",props.data)
        const router = useRouter()
        
        const [myqqq,setMyqqq]= useState(false)     
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
        //등록하기 버튼
        async function zzz() {
            
            const result= await createBoard({
                variables: {writer: myWriter, title: myTitle, contents: myContents}
            })
            // console.log(result)
            // console.log(result.data.createBoard.message)
           
            router.push(`/09-02-boards2/${result.data.createBoard.number}`)
        } 
        //수정하기 버튼
        async function xxx() {
            const myVariables = {
                number : Number(router.query.myNumber)
            }

            if(myWriter !== "") myVariables.writer= myWriter
            if(myTitle !== "") myVariables.title= myTitle           
            if(myContents !== "") myVariables.contents= myContents
            
            const result= await UpdateBoard({
                variables: myVariables
            })
            router.push(`/09-02-boards2/${router.query.myNumber}`)
            
        }
    
    return(
        <BoardWriteUI 
        aaa={onChangeMyWriter}
        ccc={onChangeMyTitle}
        ddd={onChangeMyContents}
        bbb={zzz}
        xxx={xxx}
        fff={myqqq}
        isEdit={props.isEdit}
        data={props.data}
        />
    )

}