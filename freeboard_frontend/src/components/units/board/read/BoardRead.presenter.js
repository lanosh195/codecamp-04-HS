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
        CounterWrapper,
        Imagebox1
} from "../read/BoardRead.styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faThumbsDown, faThumbsUp, faUserCircle} from "@fortawesome/free-regular-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"




export default function DetailPresenterPage(props) {
      
    return(
        <>
            <Container>    
                {/* {data?.fetchBoard &&         */}
                {/* <> */}
                <Header>
                    <HeaderLeft>
                        <Subject> {props.data?.fetchBoard.title}</Subject>
                        <WriterWrapper>
                            <UserIcon><FontAwesomeIcon icon={faUserCircle} /></UserIcon>
                            <Writer> {props.data?.fetchBoard.writer}</Writer>
                            <DateWrapper>
                                <div>Date: {props.data?.fetchBoard.createdAt}</div> {/*<Date></Date>*/}
                            </DateWrapper>
                        </WriterWrapper>
                    </HeaderLeft>
                   
                    <MapMarkerIcon><FontAwesomeIcon icon ={faMapMarkerAlt} /></MapMarkerIcon>
                   
                </Header>
                <Body>
                    <ImageBox>
                        <Imagebox1 src="/images/aaa.png"/>
                        {/* <Avatar src="/images/avatar.png" /> */}
                    </ImageBox>
                    <Contents>내용: {props.data?.fetchBoard.contents}</Contents>
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