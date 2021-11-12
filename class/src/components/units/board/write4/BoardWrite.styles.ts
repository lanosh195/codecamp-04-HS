import styled from '@emotion/styled'
import {IProps} from './BoardWrite.type'
export const MyInput = styled.input`
    
    `



export const MyButton= styled.button`
        background-color: gray;
        font-size: 30px;
        background-color : ${ (props: IProps) => props.xxx===true 
            && 'yellow'
        };
    `