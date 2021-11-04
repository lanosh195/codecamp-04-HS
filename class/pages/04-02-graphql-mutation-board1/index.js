import {useMutation,gql} from '@apollo/client'
import { useState } from 'react'


const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"철수", title:"제목", contents:"내용용"){
            _id
        number
        message
        }
    }
`
export default function GraphqlMutationBoardPage(){
    const [aaa,setAaa]= useState("메시지 가져오기")
    const [createBoard]= useMutation(CREATE_BOARD)

    async function zzz() {
        const result= await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    return(
        <>
            <div>{aaa}</div>
            <button onClick={zzz}>graphql-API 요청하기</button>
        </>
    )

}