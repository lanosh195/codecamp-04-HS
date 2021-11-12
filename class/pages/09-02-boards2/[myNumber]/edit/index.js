import BoardWrite3 from "../../../../src/components/units/board/write3/BoardWrite.container";
import {gql, useQuery } from '@apollo/client'
import { useRouter } from "next/router";

const FETCH_BOARD= gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            writer
            title
            contents
        }
    }
`


export default function BoardEditPage(){
    const router =useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {number:Number(router.query.myNumber)}
    })
    
    return  <BoardWrite3 isEdit={true} data={data}/>
        
    
}