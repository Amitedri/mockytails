import styled from 'styled-components';
const MainWrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
position:relative;
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
export { MainWrapper, Header, H1, H2, Image, ActionButton,SearchButton }