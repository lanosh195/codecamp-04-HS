import {Adress,
        Adress1, 
        Adress2, 
        Container, 
        Contents, 
        Contents1, 
        Error, 
        Footer, 
        Heading, 
        Main, 
        Password, 
        Password1, 
        Photo, 
        RadioP, 
        RadioU, 
        Sign, 
        Title, 
        Title1, 
        Upload1,  
        Upload2, 
        Upload3, 
        UT, 
        UT1, 
        Wrapper1, 
        Wrapper2, 
        Wrapper3, 
        Wrappertop, 
        Wrapperupload, 
        Writer, 
        Writer1, 
        Zipbutton, 
        Zipcode} from './BoardWrite.styles'




export default function PresenterPage(props){

    return(
        <>
        <Container>
        <Heading>게시물 등록</Heading>
        
        <Wrapper1>
            <Wrappertop>
                <Wrapper2>
                    <Writer>작성자</Writer>
                    <Writer1 type ="text" placeholder="이름을 적어주세요." onChange={props.oCW}/>
                    <Error>{props.aaa}</Error>
                </Wrapper2>
                <Wrapper3>
                    <Password>비밀번호</Password>      
                    <Password1 type ="text" placeholder="비밀번호를 입력해주세요." onChange={props.oCP}></Password1>
                    <Error>{props.bbb}</Error>
                </Wrapper3>
            </Wrappertop>

            <div>
                <Title>제목</Title>
                <Title1 type ="text" placeholder="제목을 작성해주세요." onChange={props.oCT}></Title1>
                <Error>{props.ccc}</Error>
            </div>
        
            <div>
                <Contents>내용</Contents>                  
                <Contents1 type ="text" placeholder="내용을 작성해주세요." onChange={props.oCC}></Contents1>
                <Error>{props.ddd}</Error>
            </div>
                       
            <div>
                <Adress>주소</Adress>
            
        
                <div>
                    <Zipcode type= "text"></Zipcode> <Zipbutton>우편번호 검색</Zipbutton>
                </div>
                <div>
                    <Adress1 type= "text"></Adress1>
                </div>
                <div>
                    <Adress2 type= "text"></Adress2>
                </div>
            </div>

            <div>
                <UT>유튜브</UT>                  
                <UT1 type ="text" placeholder="링크를 복사해주세요."></UT1>
            </div>
            <Footer>
                <div>
                    <Photo>사진 첨부</Photo>
                
                    <Wrapperupload>
                        <Upload1>Upload</Upload1>
                        <Upload2>Upload</Upload2>
                        <Upload3>Upload</Upload3>
                    </Wrapperupload>
                </div>
            
                <Main>메인 설정</Main>
            
                <div>
                <RadioU type="radio" id="contents" /> 유튜브
                <RadioP type="radio" id="contents" /> 사진
                </div>
            </Footer>
            <Sign onClick={props.cHK}>등록하기</Sign>
        </Wrapper1>
        </Container>
        </>
    )
} 