import React from 'react';
import backy from '../../assets/background.jpg'
import h1 from '../../assets/Mocktails.svg'
import axios from 'axios';
import * as components from '../../UI/Home';

const Main = () => {
    const [showResult, setShowResult] = React.useState(false);
    const [resultFromApi, setResultFromApi] = React.useState([]);

    const getDataFromApi = async (keyword, linkType) => {
        const determinLink = () => {
            switch (linkType) {
                case 'name':
                    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
                case 'alcoholic': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${keyword}`
                    break;
                case 'glass': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${keyword}`
                    break;
                case 'ingredients': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`
                    break;
                case 'category': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${keyword}`
                default: return linkType;
            }
        }
        const link = determinLink(linkType)
        console.log(link)
        const res = await axios({
            method: 'get',
            url: link
        });
        res.data?.drinks ? setShowResult(true) : setShowResult(false);
        res.data?.drinks ? setResultFromApi(res.data.drinks) : setResultFromApi([]);
    }
    const [showSearchBar, setShowSearchBar] = React.useState(false);

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
                <InputWrapper><InputDescription><Span>Name</Span></InputDescription><SearchInput placeholder='Type Name...' onInput={(event) => getDataFromApi(event.target.value, 'name')} /></InputWrapper>
                <InputWrapper><InputDescription><Span>Ingredients</Span></InputDescription><SearchInput placeholder='Ingreients...' onInput={(event) => getDataFromApi(event.target.value, 'ingredients')} /></InputWrapper>
                <InputWrapper><InputDescription><Span>Alcoholic</Span></InputDescription><SearchInput placeholder='Is Alcohlic? ' onInput={(event) => getDataFromApi(event.target.value, 'alcoholic')} /></InputWrapper>
                <InputWrapper><InputDescription><Span>Category</Span></InputDescription><SearchInput placeholder='Category...' onInput={(event) => getDataFromApi(event.target.value, 'category')} /></InputWrapper>
                <InputWrapper><InputDescription><Span>Glass</Span></InputDescription><SearchInput placeholder='Glass...' onInput={(event) => getDataFromApi(event.target.value, 'glass')} /></InputWrapper>
            </SetInputs>
        )
    }
    return <MainWrapper>
        <SearchButton onClick={() => setShowSearchBar((prevState) => !prevState)}>Search Alcohol</SearchButton>
        {showSearchBar ? setInputs() : null}
        <Image src={backy} />
        {!showSearchBar ? <Header>
            <H1 src={h1} />
            <H2>SHAKE YOUR COCKTAILS AT ANY PLACE</H2>
            <ActionButton onClick={() => setShowSearchBar((prevState) => !prevState)}>EXPLORE</ActionButton>
        </Header>:null}
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