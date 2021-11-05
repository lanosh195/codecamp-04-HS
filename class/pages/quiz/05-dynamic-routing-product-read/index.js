import { useMutation,gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT =gql`
    
`

export default function GraphqlMutationProductPage(){



    return(
        <>
        <div>판매자</div> <input type="text" />
        <div>상품명</div> <input type="text" />
        <div>상품설명</div> <input type="text" />
        <div>상품가격</div> <input type="text" />
        <button onClick={submit}>등록하기</button>
        </>

    )
}