import {ArrowR, Body, BodyLeft, Footer, Head, HeadFooter, HeadTop, Icon, MyMy, Name, Profile, Whole, WrapperBodyLeft, WrapperFooter, WrapperHome, WrapperProfile} from '../../../styles/quiz01-e.js'


export default function Emotionpage(){

        return(
            <>
                <Whole>
                    <Head>
                        <Icon>돋보기</Icon>
                        <div>
                            <HeadTop>
                                <MyMy>마이</MyMy> 
                                <WrapperProfile>
                                    <Profile>profile</Profile>
                                    <Name>임정아</Name>
                                    <ArrowR>arrow</ArrowR>
                                </WrapperProfile>
                            </HeadTop>
                            <HeadFooter>
                                <div>공지사항</div>
                                <div>이벤트</div>
                                <div>FAQ</div>
                                <div>Q&A</div>
                            </HeadFooter>
                        </div>
                    </Head>
                    <Body>
                        <WrapperBodyLeft>
                            <BodyLeft>
                                <div>Q.01</div>
                                <div>리뷰 작성은 어떻게 하나요?</div>
                            </BodyLeft>
                                <div>사진</div>
                        </WrapperBodyLeft>
                        <WrapperBodyLeft>
                            <BodyLeft>
                                <div>Q.02</div>
                                <div>리뷰 수정/삭제는 어떻게 하나요?</div>
                            </BodyLeft>
                                <div>사진</div>
                        </WrapperBodyLeft>
                        <WrapperBodyLeft>
                            <BodyLeft>
                                <div>Q.03</div>
                                <div>아이디/비밀번호를 잊어버렸어요.</div>
                            </BodyLeft>
                                <div>사진</div>
                        </WrapperBodyLeft>
                        <WrapperBodyLeft>
                            <BodyLeft>
                                <div>Q.04</div>
                                <div>회원탈퇴를 하고 싶어요.</div>
                            </BodyLeft>
                                <div>사진</div>
                        </WrapperBodyLeft>
                        <WrapperBodyLeft>
                            <BodyLeft>
                                <div>Q.05</div>
                                <div>출발지 설정은 어떻게 하나요?</div>
                            </BodyLeft>
                                <div>사진</div>
                        </WrapperBodyLeft>
                        <WrapperBodyLeft>
                            <BodyLeft>
                                <div>Q.06</div>
                                <div>비밀번호를 변경하고 싶어요.</div>
                            </BodyLeft>
                                <div>사진</div>
                        </WrapperBodyLeft>
                    </Body>
                    <Footer>
                        <WrapperFooter>
                            <div>이미지</div>
                            <div>홈</div>
                        </WrapperFooter>
                        <WrapperFooter>
                            <div>이미지</div>
                            <div>잇츠로드</div>
                        </WrapperFooter>
                        <WrapperFooter>
                            <div>이미지</div>
                            <div>마이찜</div>
                        </WrapperFooter>
                        <WrapperFooter>
                            <div>이미지</div>
                            <div>마이</div>
                        </WrapperFooter>
                    </Footer>


                   
                    
                    
                </Whole>

            </>
        )


}