import React, { useState, useEffect } from 'react';
import CategoryCard from '../../components/categoryCard';
import { Container, CardsContainer, Jumbotron } from './categories.styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Categories = () => {
    const [categories, setCategories] = useState([]);
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
        fetch('http://localhost:5000/categories/get')
            .then(response => response.json())
            .then(r => setCategories(r));
    }, []);

    return (
        <Container>
            <Jumbotron >
                <div className={"content"}>
                    <div className={"text"}>
                        <h1>Algorithm categories</h1>
                        <p>
                            Here you will find a great variety of algorithm categories.
                            Click on the one you're interested in and take the minicourses
                        </p>
                    </div>
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
                </div>
            </Jumbotron>
            <CardsContainer>
                {categories.map((element, index) => (
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