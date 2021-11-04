import {useMutation,gql} from '@apollo/client'
import axios from 'axios'
import { useState } from 'react'



export default function GraphqlMutationBoardPage(){
    // const [aaa,setAaa]= useState("메시지 가져오기")
    

    async function zzz() {
        const result= await axios.get('https:koreanjson.com/users')
        console.log(result)
        
        // setAaa(result.data.createBoard.message)
    }

    return(
        <>
            {/* <div>{aaa}</div> */}
            <button onClick={zzz}>graphql-API 요청하기</button>
        </>
    )

}