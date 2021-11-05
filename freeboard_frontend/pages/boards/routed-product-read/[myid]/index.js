import { useRouter } from "next/router"
import { useQuery,gql }from '@apollo/client'




const FETCH_BOARD=gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){

            _id
            writer
            title
            contents
        }
            

    }

`


export default function DynamicBoardReadPage() {

    const router =useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables:{boardId:router.query.myid}
    })

    return(
        <>
        {/* {data?.fetchBoard &&         */}
        {/* <> */}
            {/* <div>나의 상품 아이디: {router.query.myid}</div> */}
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            {/* <div>상품가격: {data && data.fetchProduct.price} </div> */}
            {/* </> */}
            {/* }     */}
        </>    
    )       
}
