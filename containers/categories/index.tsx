import React, { useState, useEffect } from 'react';

import CategoryCard from 'components/categoryCard';
import Jumbotron from 'components/jumbotron';
import { Container, CardsContainer, JumbotronSearch } from './categories.styled-components';
import content from './categories.content';
import { Category } from 'lib/types/categories';
import { Dispatch } from 'redux';
import { useFetch } from 'utils/hooks/useFetch';
import { GET_ALL_CATEGORIES } from 'lib/client/categories';

type CategoriesComponentTypes = {
    setCurrentCategory: (value: Category) => Dispatch,
}

const Categories = (props: CategoriesComponentTypes) => {
    const { response } = useFetch(GET_ALL_CATEGORIES);

    const { setCurrentCategory } = props;
    const { title: { headline, text } } = content();
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        const tmp = fetchedCategories.filter(category => category.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredCategories(tmp);
    };

    useEffect(() => {
        setFetchedCategories(response);
        setFilteredCategories(response);
    }, [response]);

    return (
        <Container>
            <Jumbotron headline={headline} text={text}>
                <JumbotronSearch >
                    <div className={"search-bar"}>
                        <div>
                            <input onChange={handleInputChange} type={"text"} placeholder={`Search...`}></input>
                        </div>
                    </div>
                </JumbotronSearch>
            </Jumbotron>
            <CardsContainer>
                {Array.isArray(filteredCategories) && filteredCategories.map((element, index) => (
                    <CategoryCard
                        key={index}
                        category={element}
                    />
                ))}
            </CardsContainer>
        </Container>
    )
}

export default Categories;
