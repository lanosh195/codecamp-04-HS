import {useState, usestate} from 'react'
import styled, { MailE, mailE, PasswordE, passwordE, Wrapper } from "../../../styles/quiz02-e"

export default function SignupStatePage() {
        const [email, setEmail]= useState("")
        const [emailError, setEmailError]=useState("")
        const [password, setpassword]= useState("")
        const [password2, setpassword2]=useState("")
        // const [passwordError, setpasswordError]= useState("")
        const [passwordError2, setpasswordError2]=useState("")
        
        
        function aaa(event){
            setEmail(event.target.value)
        }

        function bbb(event) {
            setpassword(event.target.value)
        }
        
        function ccc(event) {
            setpassword2(event.target.value)
        }
        
        function Check() {
            console.log('email:',email)
            console.log('password:',password)
            console.log('passwordr2:',password2)

            if(email.includes("@")===false){
                setEmailError("잘못된 이메일 주소입니다")                        
            } else{
                setEmailError("")
            }
            
            if(password!==password2){
                setpasswordError2("비밀번호가 일치하지 않습니다")
            } else{
                setpasswordError2("")
            }
                
        }



    return(

        <Wrapper>
           이메일 <input type="text" onChange={aaa}/>
           <MailE>{emailError}</MailE>
           비밀번호 <input type="text" onChange={bbb}/>
           {/* <div>{passwordError}</div> */}
           비밀번호 확인 <input type="text" onChange={ccc}/>
           <PasswordE>{passwordError2}</PasswordE>
           <button onClick={Check}>가입하기</button>
        </Wrapper>
    )


}