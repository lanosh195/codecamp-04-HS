import { useState } from "react";

export default function ConuterState() {

    const [Token, setToken]= useState("000000")
    const getToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    
    function aaa (){
        setToken(Token=getToken)
    }
    
    return(
        <>
        <div>{Token}</div>
        <button onClick={aaa}>인증번호전송</button>
        </>
    )

}