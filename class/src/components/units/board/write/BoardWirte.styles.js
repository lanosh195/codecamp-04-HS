import styled from '@emotion/styled'

export const MyInput = styled.input`
    
    `

export const MyButton= styled.button`
        background-color: gray;
        font-size: 30px;
        background-color : ${ props => props.xxx===true 
            && 'yellow'
        };
    `