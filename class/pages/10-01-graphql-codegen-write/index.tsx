import {useMutation,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs, IMutationCreateProductArgs } from '../../src/commons/types/generated/type'


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
    // test
    const router= useRouter()
    const [createProduct]= useMutation<Pick<IMutation, 'createProduct'>, IMutationCreateProductArgs>(CREATE_PRODUCT)
    
    async function zzz() {

        try{
            const result = await createProduct({
                variables: {
                    seller: "철수",
                    createProductInput: {

                    }   
                }
                
            })
            console.log(result)
            result.data?.createProduct?._id
            // router.push('05-08-dynamic-product-read/' +result.data.createProduct._id )//기초 표기법
            router.push(`05-08-dynamic-product-read/${result.data?.createProduct?._id} `)//템플릿 리터럴

        }catch(error){
            console.log(error.message)
        }
    
    
    
    const [mySeller, setMySeller]= useState("")
    const [myName, setMyName]= useState("")
    const [myDetail, setMyDetail]= useState("")
    const [myPrice, setMyPrice]= useState("")
    
    

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