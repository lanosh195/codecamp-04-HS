import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD}from './BoardWrite.queries'
import {useMutation} from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import {useRouter} from 'next/router'
import {IBoardWirteProps, IMyVariables} from './BoardWrite.type'


export default function BoardWrite4(props: IBoardWirteProps){
    console.log("dddd",props.data)
        const router = useRouter()
        
        const [myqqq,setMyqqq]= useState<boolean>(false)     
        // const [aaa,setAaa]= useState("메시지 가져오기")
        const [myWriter, setMyWriter]= useState("")
        const [myTitle, setMyTitle]= useState("")
        const [myContents, setMyContents]= useState("")
       
        
        const [createBoard]= useMutation(CREATE_BOARD)
        const [UpdateBoard] =useMutation(UPDATE_BOARD)
        
        
        function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>){
            setMyWriter(event.target.value)
            checkContents()
        }
    
        function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>){
            setMyTitle(event.target.value)
            checkContents()
        }
        
        function onChangeMyContents(event:ChangeEvent<HTMLInputElement>){
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
            router.push(`/09-02-boards2/${result.data.createBoard.number}`)
        } 

        async function xxx() {
            

            const myVariables: IMyVariables = {
                number : Number(router.query.myNumber)
            }

            if(myWriter !== "") myVariables.writer= myWriter
            if(myTitle !== "") myVariables.title= myTitle           
            if(myContents !== "") myVariables.contents= myContents
            


            // alert("수정하기 버튼")
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
        fff={myqqq}
        isEdit={props.isEdit}
        xxx={xxx}
        data={props.data}
        />
    )

}