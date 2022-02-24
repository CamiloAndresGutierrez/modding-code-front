import React, { useState, useEffect } from 'react';

import CategoryCard from 'components/categoryCard';
import Jumbotron from 'components/jumbotron';
import { Container, CardsContainer, JumbotronSearch } from './categories.styled-components';
import content from './categories.content';

const Categories = (props) => {
    const { categories } = props;
    const { title: { headline, text } } = content();
    const [fetchedCategories, setFetchedCategories] = useState([]);

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        const tmp = categories.filter(category => category.name.toLowerCase().startsWith(searchValue.toLowerCase()));
        setFetchedCategories(tmp);
    };

    useEffect(() => {
        setFetchedCategories(categories);
    }, [categories]);

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
                {Array.isArray(fetchedCategories) && fetchedCategories.map((element, index) => (
                    <CategoryCard
                        key={index}
                        head={element.name}
                        body={element.description}
                        ctaText={"Open"}
                        ctaLink={`categories/${element.path}`}
                    />
                ))}
            </CardsContainer>
        </Container>
    )
}

export default Categories;
