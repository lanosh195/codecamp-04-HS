import {useRouter}from 'next/router'

export default function StaticRoutingPage(){
    const router= useRouter()

    function onClickmove1(){
        router.push('/05-04-static-routed-number/1')
    }
    function onClickmove2(){
        router.push('/05-04-static-routed-number/2')
    }
    function onClickmove3(){
        router.push('/05-04-static-routed-number/3')
    }

    return(
        <>
            <button onClick={onClickmove1}>페이지 이동</button>
            <button onClick={onClickmove2}>페이지 이동</button>
            <button onClick={onClickmove3}>페이지 이동</button>
        </>
    )

}