import React from 'react';
import backy from '../../assets/background.jpg'
import h1 from '../../assets/Mocktails.svg'

import * as components from '../../UI/Home';

const Main = () => {
    const { MainWrapper, Header, H1, H2, Image,ActionButton,SearchButton } = components;
    return <MainWrapper>
        <SearchButton>Search Alcohol</SearchButton>
        <Image src={backy} />
        <Header>
            <H1 src={h1} />
            <H2>SHAKE YOUR COCKTAILS AT ANY PLACE</H2>
            <ActionButton>EXPLORE</ActionButton>
        </Header>
    </MainWrapper>
}

export default Main;