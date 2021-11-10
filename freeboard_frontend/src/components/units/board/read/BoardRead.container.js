import { useRouter } from "next/router"
import { useQuery}from '@apollo/client'
import DetailPresenterPage from "./BoardRead.presenter"
import {FETCH_BOARD}from './BoardRead.queries'



export default function DetailContainerPage() {
    
    const router =useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables:{boardId: router.query.boardId}
    })
    
    function GoToList(){
        router.push(`/boards/list`)
    }
    
    
    return(
        <DetailPresenterPage 
            GoToList={GoToList}
            data={data}
        />
    )       
}