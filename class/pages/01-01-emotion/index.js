import {MyDiv, A, MyId, MyPasword, Wrapper} from '../../styles/emotion'

export default function Emotionpage(){
    
                                            //리턴 위쪽은 자바스크립트
    
    return(  //리턴 아래쪽은 JSX(리액트 전용 html) 쓰는 곳,  return ()두 줄 이상 쓸때는 괄호 한 줄만 쓸때는 생략 가능
        <>
            <MyDiv>로그인</MyDiv> 
            <Wrapper>
            <A>아이디</A><MyId type="text"/>
            <A>비밀번호</A><MyPasword type="text"/>
            나의이미지: <img src="/images/lotto (1).png"/>
            </Wrapper>
            
        </>        // fragment 만들어 줘야함
    )                                       
}