import React from 'react';
import backy from '../../assets/background.jpg'
import h1 from '../../assets/Mocktails.svg'
import axios from 'axios';
import * as components from '../../UI/Home';

const Main = () => {
    const [showResult, setShowResult] = React.useState(false);
    const [resultFromApi, setResultFromApi] = React.useState([]);

    const getDataFromApi = async (keyword) => {
        const res = await axios({
            method: 'get',
            url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
        });
        console.log(res.data.drinks)
        res.data.drinks ? setShowResult(true) : setShowResult(false);
        res.data.drinks ? setResultFromApi(res.data.drinks) : setResultFromApi([]);

    }
    const [showSet, setShowSet] = React.useState(false);

    const { MainWrapper, Header, H1, H2, Image, ActionButton, SearchButton, ResultWindow, ResLine, SetInputs, SearchInput, InputWrapper, InputDescription, Span, FieldName, FieldsWrapper, FieldValue } = components;
    const mapResults = (list) => {
        if (list.length > 1) {
            return list.map((item) => {
                return <ResLine><FieldValue>{item.strDrink}</FieldValue><FieldValue>{item.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</FieldValue><FieldValue>{item.strIngredient}</FieldValue><FieldValue>{item.strGlass}</FieldValue><FieldValue>{item.strCategory}</FieldValue></ResLine>
            })
        }
    }

    const setInputs = () => {
        return (
            <SetInputs>
                <InputWrapper ><InputDescription><Span>Name</Span></InputDescription><SearchInput placeholder='Type Name...' onInput={(event) => getDataFromApi(event.target.value)} /></InputWrapper>
                <InputWrapper><InputDescription><Span>Ingredients</Span></InputDescription><SearchInput placeholder='Ingreients...' /></InputWrapper>
                <InputWrapper><InputDescription><Span>Alcoholic</Span></InputDescription><SearchInput placeholder='Is Alcohlic? ' /></InputWrapper>
                <InputWrapper><InputDescription><Span>Favourite Alcohol</Span></InputDescription><SearchInput placeholder='favourite...' /></InputWrapper>
                <InputWrapper><InputDescription><Span>Glass</Span></InputDescription><SearchInput placeholder='Glass...' /></InputWrapper>
            </SetInputs>
        )
    }
    return <MainWrapper>
        <SearchButton onClick={() => setShowSet((prevState) => !prevState)}>Search Alcohol</SearchButton>
        {showSet ? setInputs() : null}
        <Image src={backy} />
        <Header>
            <H1 src={h1} />
            <H2>SHAKE YOUR COCKTAILS AT ANY PLACE</H2>
            <ActionButton>EXPLORE</ActionButton>
        </Header>
        {showResult ? <ResultWindow>
            <FieldsWrapper>
                <FieldName>Name</FieldName>
                <FieldName>Alcoholic</FieldName>
                <FieldName>Ingredients</FieldName>
                <FieldName>Glass</FieldName>
                <FieldName>Category</FieldName>
            </FieldsWrapper>

            {mapResults(resultFromApi)}
        </ResultWindow> : null}
    </MainWrapper>;
}

export default Main;