import styled, { keyframes } from 'styled-components';
const Fade = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}
`
const MainWrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
position:relative;
transition: all 1s ease;
`
const Image = styled.img`
height:100%;
width:100%;
position:absolute;
top:0;
left:0;

`
const Header = styled.div`
height:35%;
width:25%;
display:flex;
flex-direction:column;
z-index:999;
margin-top:8%;
margin-left:5%;
text-align:center;

`

const H1 = styled.img`
width:100%;
height:35%;
`
const H2 = styled.h2`
font-size:1.5em;
color:white;
`
const ActionButton = styled.button`
all:unset;
height:15%;
width:25%;
background-color:#5EBA71;
font-family: 'Oregano', cursive;
font-size:1.5em;
font-weight:500;
border:2px solid white;
border-radius:5px;
margin-left:3%;
`
const SearchButton = styled(ActionButton)`
text-align:center;
height:5%;
width:10%;
margin:0;
background-color:white;
z-index:999;
align-self:center;
position: relative;
top:5%
`


const ResultWindow = styled.div`
height:50%;
width:70%;
background: linear-gradient(262.86deg, #000000 5.09%, rgba(44, 189, 252, 0.79) 102.69%);
border: 5px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;position:absolute;
bottom:5%;
left:15%;
display:flex;
flex-direction:column;
animation: ${Fade} 1s ease;

`
const ResLine = styled.div`
height:5%;
width:80%;
background-color:blue;
display:flex;
flex-direction:row;
justify-content:center;
background: linear-gradient(269.93deg, #E2E2E2 3.62%, rgba(119, 247, 255, 0.66) 99.12%);
border-bottom:1px solid #111111;
color:white;
font-weight:500;
align-self:center;
:nth-child(2){
margin-top:0.5%;
}
`


const SetInputs = styled.div`
height:5%;
width:80%;
position:absolute;
background-color:purple;
top:12%;
left:15%;
z-index:999;
display:flex;
flex-direction:row;
border-radius:15px;
overflow:hidden;
justify-content:space-around;
animation: ${Fade} 1s ease;

`
const InputWrapper = styled.div`
height:100%;
width:15%;
display:flex;
flex-direction:row;
align-self:center;
text-align:center;
font-size:1em;
border-radius:15px;
overflow:hidden;

`
const InputDescription = styled.div`
height:80%;
width:50%;
align-self:center;
background-color:#111111;
color:white;
display:flex;
justify-content:center;
`
const SearchInput = styled.input`
all:unset;
height:80%;
width:50%;
align-self:center;
background-color:white;

::placeholder{
    color:lightgray;
}

`
const Span = styled.span`
align-self:center;
`

const FieldName = styled.div`
height:5%;
width:15%;
text-decoration:underline;
`
const FieldsWrapper = styled.div`
height:5%;
width:80%;
display:flex;
flex-direction:row;
justify-content:center;
align-self:flex-start;
margin-left:10%;
background: linear-gradient(269.93deg, #E2E2E2 3.62%, rgba(119, 247, 255, 0.66) 99.12%);
border-radius:15px;
font-weight:500;

`

const FieldValue = styled.div`
height:100%;
width:15%;
align-self:center;
`

export { MainWrapper, Header, H1, H2, Image, ActionButton, SearchButton, ResultWindow, ResLine, SetInputs, SearchInput, InputWrapper, InputDescription, Span, FieldName, FieldsWrapper, FieldValue };