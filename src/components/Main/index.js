import React from 'react';
import backy from '../../assets/background.jpg'
import h1 from '../../assets/Mocktails.svg'
import axios from 'axios';
import * as components from '../../UI/Home';

const Main = () => {
    const [showResult, setShowResult] = React.useState(false);
    const [resultFromApi, setResultFromApi] = React.useState([]);
    const [showSearchBar, setShowSearchBar] = React.useState(false);
    //Handles request on Input event
    const getDataFromApi = async (keyword, linkType) => {
        //changing endpoint for different search terms
        const determinLink = () => {
            switch (linkType) {
                case 'name':
                    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
                case 'alcoholic': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${keyword}`
                case 'glass': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${keyword}`
                case 'ingredients': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`
                case 'category': return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${keyword}`
                default: return linkType;
            }
        }
        //make request
        const link = determinLink(linkType)
        console.log(link)
        const res = await axios({
            method: 'get',
            url: link
        });
        //initate error handler
        if (res.status !== 200) {
            showError();
        }
        //if there is data coming back this will set UI

        //show results container
        res.data?.drinks ? setShowResult(true) : setShowResult(false);
        //set data to state
        res.data?.drinks ? setResultFromApi(res.data.drinks) : setResultFromApi([]);
    }


    //styled components
    const { MainWrapper, Header, H1, H2, Image, ActionButton, SearchButton, ResultWindow, ResLine, SetInputs, SearchInput, InputWrapper, InputDescription, Span, FieldName, FieldsWrapper, FieldValue } = components;

    //map results from API
    const mapResults = (list) => {
        if (list.length > 1) {
            return list.map((item, index) => {
                return <ResLine key={index}><FieldValue>{item.strDrink}</FieldValue><FieldValue>{item.strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</FieldValue><FieldValue>{item.strIngredient}</FieldValue><FieldValue>{item.strGlass}</FieldValue><FieldValue>{item.strCategory}</FieldValue></ResLine>
            })
        }
    }
    //error handler
    const showError = () => {
        return (
            <div className='error'>Something went wrong please refresh the page or try again later. </div>
        )
    }
    //input list on nav
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
    //hide headers and show results bar
    const handleShowElements = () => {
        setShowSearchBar((prevState) => !prevState)
        setShowResult((prevState) => !prevState)
    }

    return <MainWrapper>
        <SearchButton onClick={() => handleShowElements()}>Search Alcohol</SearchButton>
        {showSearchBar ? setInputs() : null}
        <Image src={backy} />
        {showSearchBar ? null : <Header>
            <H1 src={h1} />
            <H2>SHAKE YOUR COCKTAILS AT ANY PLACE</H2>
            <ActionButton onClick={() => setShowSearchBar((prevState) => !prevState)}>EXPLORE</ActionButton>
        </Header>}
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