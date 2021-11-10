import { useRouter } from "next/router"
import { useQuery,gql }from '@apollo/client'




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

// graphql에서 주석 #


export default function DynamicProductReadPage() {
    

    const router =useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables:{boardId: router.query.boardId}
    })

    console.log(data)

    return(
        <>
            <div>게시글 번호: {router.query.myNumber}</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={()=> router.push(`/08-06-boards/${router.query.myNumber}/edit`)}>수정하기 페이지</button>
            
       </>
    )
}




