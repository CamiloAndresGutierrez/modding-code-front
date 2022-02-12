import React, { useState, useEffect } from 'react';
import CategoryCard from 'components/categoryCard';
import Jumbotron from 'components/jumbotron';
import { Container, CardsContainer, JumbotronSearch } from './categories.styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Categories = (props) => {
    const { categories } = props;
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const [search, setSearch] = useState("");

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter" && search !== "") {
            console.log(search);
        }
    }

    const handleSearch = () => {
        if (search !== "") {
            console.log(search);
        }
    }

    useEffect(() => {
        setFetchedCategories(categories);
    }, [categories]);

    const title = {
      headline: "Algorithm categories",
      text: "Here you will find a great variety of algorithm categories. Click on the one you're interested in and take the minicourses"
    }

    return (
        <Container>
            <Jumbotron headline={title.headline} text={title.text}>
              <JumbotronSearch >
                <div className={"search-bar"}>
                    <div>
                        <div className={"search-input"}>
                            <input onChange={handleInputChange} onKeyPress={handleEnterKey} type={"text"} placeholder={`Search...`}></input>
                        </div>
                        <div className={"mag-glass"} onClick={handleSearch}>
                            <SearchIcon />
                        </div>
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
