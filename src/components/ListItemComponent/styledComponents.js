import styled from 'styled-components'

export const TodoItem = styled.li`
display:flex;
flex-direction:row;
align-items:center;`

export const TodoText = styled.p`
color:#ffffff;
font-size:24px;
margin-left:50px;

text-decoration: ${props=>props.iscomplited==='true'?('line-through'):('none')};
`

export const Chuckedel = styled.input`
width:24px;
height:24px;`

export const BinButton = styled.button`
margin-left:auto;
background-color:transparent;
border:none;
padding-top:4px;
color:#ffd700;
font-size:28px;
`