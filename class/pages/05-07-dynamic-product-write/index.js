import {useMutation,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'


const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {


        createProduct(seller: $seller, createProductInput: $createProductInput){
        _id
        number
        message
        }
    }
`
export default function GraphqlMutationProductPage(){
    // const [aaa,setAaa]= useState("메시지 가져오기")
    const router= useRouter()
    
    const [mySeller, setMySeller]= useState("")
    const [myName, setMyName]= useState("")
    const [myDetail, setMyDetail]= useState("")
    const [myPrice, setMyPrice]= useState("")
    
    const [createProduct]= useMutation(CREATE_PRODUCT)

    function onChangeMySeller(event){
        setMySeller(event.target.value)
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
        
    

    async function zzz() {

        try{

            const result = await createProduct({
                variables: {
                    seller: mySeller,
                    createProductInput:{
                        name: myName,
                        detail: myDetail,
                        price: Number(myPrice)
                    //     seller: seller, <<값이랑 같을 경우 seller, 로 줄여 쓸 수 있음
                    
                    }
                }
            })
            console.log(result)
            // router.push('05-08-dynamic-product-read/' +result.data.createProduct._id )//기초 표기법
            router.push(`05-08-dynamic-product-read/${result.data.createProduct._id} `)//템플릿 리터럴

        }catch(error){
            console.log(error.message)
        }

        
        
        
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeMySeller}/><br/>
            상품명: <input type="text" onChange={onChangeMyName}/><br/>
            상품내용: <input type="text" onChange={onChangeMyDetail}/><br/>
            상품가격: <input type="text" onChange={onChangeMyPrice}/><br/>
            <button onClick={zzz}>상품 등록하기</button>

            
        </>
    )

}