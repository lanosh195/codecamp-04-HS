import {useMutation,gql} from '@apollo/client'
import { useState } from 'react'


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {


        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
        number
        message
        }
    }
`
export default function GraphqlMutationBoard2Page(){
    const [aaa,setAaa]= useState("메시지 가져오기")
    const [createBoard]= useMutation(CREATE_BOARD)

    async function zzz() {
        const result= await createBoard({
            variables: {writer: "작가", title:"제목이요", contents:"내용임미다"}
        })
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