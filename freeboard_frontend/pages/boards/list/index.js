import { BestBoard, 
    BestPost, 
    BestPostWrapper, 
    BoardFooter, 
    BoardList, 
    BoardSubmit, 
    Body, 
    BodyHeader, 
    Container, 
    CreatedDateN, 
    Date1, 
    Head,  
    IndexN, 
    SerchButton, 
    SerchTitle, 
    Table,
    TableCreatedDate,
    TableIndex,
    TableTitle,
    TableWriter,
    TitleN,
    WriterN,
    ListWrapper
} from "../../../src/components/units/board/list/BoardList.styles";

import {useQuery,gql} from '@apollo/client'




const FETCH_BOARDS_BEST=gql`
query {
    fetchBoardsOfTheBest{
        title
        writer
        createdAt
    }
}
`
const FETCH_BOARDS=gql`
query {
fetchBoards {
    
    writer
    title
    createdAt
}
}
`

export default function boardListPage(){

const {data1}= useQuery(FETCH_BOARDS_BEST)
const {data}= useQuery(FETCH_BOARDS)


return(
<>
    <Container>
        <Head>
            <BestBoard>베스트 게시글</BestBoard>
            <BestPostWrapper>
                {data1?.fetchBoardsofTheBest.map((el, index)=>(
                    <>
                    <BestPost>{index}</BestPost>
                    <BestPost>{el.title}</BestPost>
                    <BestPost>{el.writer}</BestPost>
                    <BestPost>{el.createdAt}</BestPost>
                    </>
                ))}
                
            </BestPostWrapper>
        </Head>
        <Body>
            <BodyHeader>
                <SerchTitle>제목 검색</SerchTitle><Date1>YYYY.MM.DD</Date1><SerchButton>검색하기</SerchButton>
            </BodyHeader>
            <BoardList>
                <Table>
                    <TableIndex>번호</TableIndex> 
                    <TableTitle>제목</TableTitle> 
                    <TableWriter>작성자</TableWriter> 
                    <TableCreatedDate>날짜</TableCreatedDate> 
                </Table>
                {data?.fetchBoards.map((el, index)=>(
                    <ListWrapper key={el.number}>
                        <IndexN>{index+1}</IndexN>
                        <TitleN>{el.title}</TitleN>
                        <WriterN>{el.writer}</WriterN>
                        <CreatedDateN>{el.createdAt}</CreatedDateN>            
                    </ListWrapper>
                ))}
                    
            </BoardList>
            
        </Body>
            <BoardFooter>
                <BoardSubmit>게시물 등록하기</BoardSubmit>
            </BoardFooter>
    </Container>
</>
)
} 