import axious from 'axios'
import { useState } from 'react'

export default function RestGetPage(){
    const [aaa, setAaa]= useState("결과창")

    // const zzz = async() => {
    //      await axious.get('')
    // }
    async function zzz() {
       const result =await axious.get('https://koreanjson.com/posts/1')
       console.log(result) 
       console.log(result.data.title)

       setAaa(result.data.title)
    }

    return (
        <>
            <div>
                {aaa}
            </div>
            <button onClick={zzz}>REST-API 요청하기!!</button>  
        </>
    )
        
}