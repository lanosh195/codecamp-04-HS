import {Adress, Adress1, Adress2, Container, Contents, Contents1, Error, Footer, Heading, Main, Password, Password1, Photo, RadioP, RadioU, Sign, Title, Title1, Upload1, upload1, Upload2, upload2, Upload3, upload3, UT, UT1, Wrapper, Wrapper1, Wrapper2, Wrapper3, Wrappertop, Wrapperupload, WrapperWriter, Writer, Writer1, Zipbutton, Zipcode} from '../../../styles/new'
import {useState} from 'react'
import {useMutation,gql} from '@apollo/client'
import {useRouter} from "next/router"


const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {


        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
        
        }
    }
`

export default function Emotionpage(){
    
    const router=useRouter()
    const [createBoard]=useMutation(CREATE_BOARD)

    const [writer, setWriter]= useState("")
    const [password, setPassword]=useState("")
    const [title, setTitle]= useState("")
    const [contents, setContents]=useState("")

    const [writerError,setWriterError]=useState("")
    const [passwordError,setPasswordError]=useState("")
    const [titleError,setTitleError]=useState("")
    const [contentsError,setContentsError]=useState("")
    
    
    // 게시물 등록하기


    
     
    
    function onChangeWriter(event){
        setWriter(event.target.value)
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
    }
    
    function onChangeContents(event){
            setContents(event.target.value)
    }

        
    
    function onChangeWriter(event){
        setWriter(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }
    
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    function onChangeContents(event) {
        setContents(event.target.value)
    }


    async function Check(){
        

        if(writer.length===0){
            setWriterError("이름을 입력해주세요")
        }   else{
            setWriterError("")
        }
        if(password.length===0){
            setPasswordError("비밀번호를 입력해주세요")
        }   else{
            setPasswordError("")
        }
        if(title.length===0){
            setTitleError("제목을 입력해주세요")
        }   else{
            setTitleError("")
        }
        if(contents.length===0){
            setContentsError("내용을 입력해주세요")
        }   else{
            setContentsError("")
        }
        const result= await createBoard({
            variables: {
                createBoardInput:{
                    writer:writer,
                    password:password,
                    title:title,
                    contents:contents
                }
            }
        })
        console.log(result)
        router.push('routed-product-read/'+result.data.createBoard._id)
    }

    return(
        <>
        <Container>
        <Heading>게시물 등록</Heading>
        
        <Wrapper1>
            <Wrappertop>
                <Wrapper2>
                    <Writer>작성자</Writer>
                    <Writer1 type ="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
                    <Error>{writerError}</Error>
                </Wrapper2>
                <Wrapper3>
                    <Password>비밀번호</Password>      
                    <Password1 type ="text" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}></Password1>
                    <Error>{passwordError}</Error>
                </Wrapper3>
            </Wrappertop>

            <div>
                <Title>제목</Title>
                <Title1 type ="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}></Title1>
                <Error>{titleError}</Error>
            </div>
        
            <div>
                <Contents>내용</Contents>                  
                <Contents1 type ="text" placeholder="내용을 작성해주세요." onChange={onChangeContents}></Contents1>
                <Error>{contentsError}</Error>
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
            <Sign onClick={Check}>등록하기</Sign>
        </Wrapper1>
        </Container>
        </>
    )
}  //class보고 따라 만들기, 사진은 그냥 회색박스로, 가장 밖의 감싸는 상자 높이 x