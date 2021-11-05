import { useMutation,gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT =gql`
    
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {


        createProduct(seller: $seller, createProductInput: $createProductInput){
        _id
        number
        message
        }
    }
    `

export default function GraphqlMutationProductPage(){

    const router=useRouter()
    const [createProduct]=useMutation(CREATE_PRODUCT)

    const [mySeller,setMyselelr]=useState("")
    const [myName, setMyName]= useState("")
    const [myDetail, setMyDetail]= useState("")
    const [myPrice, setMyPrice]= useState("")
    
    function onChangeMySeller(event){
        setMyselelr(event.target.value)
    }
    function onChangeMyName(event){
        setMyName(event.target.value)
    }
    function onChangeMyDetail(event){
        setMyDetail(event.target.value)
    }
    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    }

    async function submit (){

        const result= await createProduct({
            variables: {
                seller: mySeller,
                createProductInput:{
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice)
                }
            }
        }


        )
        console.log(result)
        router.push('05-02-dynamic-routed-product-read'+result.data.createProduct._id)
    }
        

    return(
        <>
        <div>판매자</div> <input type="text" onChange={onChangeMySeller} />
        <div>상품명</div> <input type="text" onChange={onChangeMyName}/>
        <div>상품설명</div> <input type="text" onChange={onChangeMyDetail}/>
        <div>상품가격</div> <input type="text" onChange={onChangeMyPrice}/>
        <button onClick={submit}>등록하기</button>
        </>

    )
}