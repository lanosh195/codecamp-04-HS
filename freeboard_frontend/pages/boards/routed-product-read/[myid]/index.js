import { useRouter } from "next/router"
import { useQuery,gql }from '@apollo/client'
import {Container, 
        Header, 
        Subject, 
        WriterWrapper,
        Writer,
        DateWrapper,
        HeaderLeft,
        Body,
        Contents,
        ImageBox,
        VedioBox,
        FooterIcon,
        UserIcon,
        MapMarkerIcon,
        DisLikeIcon,
        LikeIcon,
        CounterWrapper
} from "../../../../styles/routed-new"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faThumbsDown, faThumbsUp, faUserCircle} from "@fortawesome/free-regular-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import ContentsImage from '../../../../public/images/aaa.png'
import { useState } from "react"






const FETCH_BOARD=gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){

            _id
            writer
            title
            contents
            createdAt
        }
            

    }

`


export default function DynamicBoardReadPage() {
    
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
        <>
            <Container>    
                {/* {data?.fetchBoard &&         */}
                {/* <> */}
                <Header>
                    <HeaderLeft>
                        <Subject> {data?.fetchBoard.title}</Subject>
                        <WriterWrapper>
                            <UserIcon><FontAwesomeIcon icon={faUserCircle} /></UserIcon>
                            <Writer> {data?.fetchBoard.writer}</Writer>
                            <DateWrapper>
                                <div>Date: {data?.fetchBoard.createdAt}</div> {/*<Date></Date>*/}
                            </DateWrapper>
                        </WriterWrapper>
                    </HeaderLeft>
                   
                    <MapMarkerIcon><FontAwesomeIcon icon ={faMapMarkerAlt} /></MapMarkerIcon>
                   
                </Header>
                <Body>
                    <ImageBox>
                        <img src={ContentsImage} />
                    </ImageBox>
                    <Contents>내용: {data?.fetchBoard.contents}</Contents>
                    <VedioBox></VedioBox>
                    <FooterIcon>
                    <LikeIcon><FontAwesomeIcon icon={faThumbsUp} onClick={likeCountUp} /></LikeIcon>
                    <DisLikeIcon><FontAwesomeIcon icon={faThumbsDown} onClick={disLikeCountUp}/></DisLikeIcon>
                    </FooterIcon>
                    <CounterWrapper>
                        <div>{likeCounter}</div>
                        <div>{dislikeCounter}</div>
                    </CounterWrapper>
                </Body>
            </Container>
        </>    
    )       
}
