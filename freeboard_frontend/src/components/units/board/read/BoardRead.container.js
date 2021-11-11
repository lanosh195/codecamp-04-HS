import { useRouter } from "next/router"
import { useQuery}from '@apollo/client'
import DetailPresenterPage from "./BoardRead.presenter"
import {FETCH_BOARD}from './BoardRead.queries'



export default function DetailContainerPage() {
    // const [deleteBoard]=useMutation(DELTE_BOARD)
    const router =useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables:{boardId: router.query.boardId}
    })
    
    function GoToList(){
        router.push(`/boards/list`)
    }
    
    function GoToEdit(){
        router.push('/boards/edit')
    }

    // async function DeleteBoard(){
    //     const result= await deleteBoard({

    //     })
    // }
    
    return(
        <DetailPresenterPage 
            GoToList={GoToList}
            GoToNew={GoToEdit}
            data={data}
        />
    )       
}