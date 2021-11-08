import {useRouter}from 'next/router'
import Presenter from './BoardWrite.presenter'

export default function Container(){
    const router= useRouter()

    
    
    function onClickmove(){
        router.push('/05-06-dynamic-routed-number/n')
    }

    return(
       <Presenter
       aaa={onClickmove}
       />
    )

}