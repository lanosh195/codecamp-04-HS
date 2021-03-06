import {gql, useMutation, useQuery} from '@apollo/client' 
import styled from '@emotion/styled'

const FETCH_BOARDS=gql`
    query {
        fetchBoards {
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD=gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`


const Column=styled.div`
    width: 20%;    
`
const Row=styled.div`
    display: flex;
    flex-direction: row;    
`


export default function MapCheckBoxPage(){
    const [deleteBoard]= useMutation(DELETE_BOARD)
    const {data}= useQuery(FETCH_BOARDS) // [{...},{...},{...}]
    

    async function onClickDelete(event){
        // try{

       
        await deleteBoard({
            variables:{number: Number(event.target.id)},
            refetchQueries:[{query:FETCH_BOARDS}]
        })
        // }catch(error)
    }

    return(
        <div>
            {data?.fetchBoards.map((el, index)=>(
                <Row key={el.number}>
                    <Column>
                        <input type="checkbox" />
                    </Column>
                    <Column>{index+1}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                </Row>
            ) )}
        </div>
    )
}