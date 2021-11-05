import {useRouter}from 'next/router'

export default function DynamicRoutingNumberPage(){
    const router= useRouter()

    // function onClickmove1(){
    //     router.push('/05-06-dynamic-routed-number/1')
    // }
    // function onClickmove2(){
    //     router.push('/05-06-dynamic-routed-number/2')
    // }
    // function onClickmove3(){
    //     router.push('/05-06-dynamic-routed-number/3')
    // }
    
    function onClickmove(){
        router.push('/05-06-dynamic-routed-number/n')
    }

    return(
        <>
            {/* <button onClick={onClickmove1}>1번 게시물 </button>
            <button onClick={onClickmove2}>2번 게시물 </button>
            <button onClick={onClickmove3}>3번 게시물</button> */}
            <button onClick={onClickmove}>게시판 이동</button>
        </>
    )

}