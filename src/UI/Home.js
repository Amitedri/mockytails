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
height:15%;
width:25%;
display:flex;
flex-direction:column;
z-index:999;
margin-top:10%;
margin-left:5%
`

 const H1 = styled.img`
width:100%;
height:60%;
`
 const H2 = styled.h2`
font-size:1.5em;
color:white;
`

export {MainWrapper,Header,H1,H2,Image}