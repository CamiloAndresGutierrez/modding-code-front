import React, { useState, useEffect } from 'react';

import CategoryCard from 'components/categoryCard';
import Jumbotron from 'components/jumbotron';
import { Container, CardsContainer, JumbotronSearch } from './categories.styled-components';
import content from './categories.content';
import { Category } from 'lib/types/categories';
import Dialog from 'components/Dialog';

type CategoriesComponentTypes = {
    categories: Category[]
}

const Categories = (props: CategoriesComponentTypes) => {
    const { categories } = props;
    const { title: { headline, text } } = content();
    const [fetchedCategories, setFetchedCategories] = useState(categories);
    const [filteredCategories, setFilteredCategories] = useState(categories);

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        const tmp = fetchedCategories.filter(category => category.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredCategories(tmp);
    };

    useEffect(() => {
        setFetchedCategories(categories);
        setFilteredCategories(categories);
    }, [categories]);

    return (
        <Container>
            <Jumbotron headline={headline} text={text}>
                <JumbotronSearch >
                    {categories.length ?
                        <div className={"search-bar"}>
                            <div>
                                <input onChange={handleInputChange} type={"text"} placeholder={`Search...`}></input>
                            </div>
                        </div> : null
                    }
                </JumbotronSearch>
            </Jumbotron>
            {categories.length ?
                <CardsContainer>
                    {Array.isArray(filteredCategories) && filteredCategories.map((element, index) => (
                        <CategoryCard
                            key={index}
                            category={element}
                        />
                    ))}
                </CardsContainer>
                : <Dialog title={"There are no categories available, please try again later. "} />}
        </Container >
    )
}

export default Categories;
