import { useRouter } from "next/router"
import { useQuery}from '@apollo/client'
import { useState } from "react"
import DetailPresenterPage from "./BoardRead.presenter"
import {FETCH_BOARD}from '../read/BoardRead.queries'



export default function DetailContainerPage() {
    
    const router =useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables:{boardId:router.query.myid}
    })

    const [likeCounter, setLikeCounter]= useState(0)
    const [dislikeCounter, setDisLikeConter]= useState(0)

    function likeCountUp() {
        setLikeCounter(likeCounter+1)
    }
    function disLikeCountUp() {
        setDisLikeConter(dislikeCounter+1)
    }
    
    return(
        <DetailPresenterPage 
            countup={likeCountUp}
            countdown={disLikeCountUp}
            data={data}
        />
    )       
}