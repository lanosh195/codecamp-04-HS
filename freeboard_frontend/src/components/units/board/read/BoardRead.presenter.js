import * as S from "../read/BoardRead.styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faThumbsDown, faThumbsUp, faUserCircle} from "@fortawesome/free-regular-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"




export default function DetailPresenterPage(props) {
      
    return(
        <>
            <S.Container>    
                {/* {data?.fetchBoard &&         */}
                {/* <> */}
                <S.Header>
                    <S.HeaderLeft>
                        <S.Subject> {props.data?.fetchBoard.title}</S.Subject>
                        <S.WriterWrapper>
                            <S.UserIcon><FontAwesomeIcon icon={faUserCircle} /></S.UserIcon>
                            <S.Writer> {props.data?.fetchBoard.writer}</S.Writer>
                            <S.DateWrapper>
                                <div>Date: {props.data?.fetchBoard.createdAt}</div> {/*<Date></Date>*/}
                            </S.DateWrapper>
                        </S.WriterWrapper>
                    </S.HeaderLeft>
                   
                    <S.MapMarkerIcon><FontAwesomeIcon icon ={faMapMarkerAlt} /></S.MapMarkerIcon>
                   
                </S.Header>
                <S.Body>
                    <S.ImageBox>
                        <S.Imagebox1 src="/images/aaa.png"/>
                        {/* <Avatar src="/images/avatar.png" /> */}
                    </S.ImageBox>
                    <S.Contents>내용: {props.data?.fetchBoard.contents}</S.Contents>
                    <S.VedioBox></S.VedioBox>
                    <S.FooterIcon>
                    <S.LikeIcon><FontAwesomeIcon icon={faThumbsUp} /></S.LikeIcon>
                    <S.DisLikeIcon><FontAwesomeIcon icon={faThumbsDown} /></S.DisLikeIcon>
                    </S.FooterIcon>
                    <S.CounterWrapper>
                        <div>0</div>
                        <div>1</div>
                    </S.CounterWrapper>
                </S.Body>
                <S.Footer>
                    <S.FooterButton onClick={props.GoToList}>목록으로</S.FooterButton>
                    <S.FooterButton onClick={props.GoToNew}>수정하기</S.FooterButton>
                    <S.FooterButton>삭제하기</S.FooterButton>

                </S.Footer>
            </S.Container>
        </>    
    )       
}