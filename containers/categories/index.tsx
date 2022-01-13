import React, { useState, useEffect } from 'react';
import CategoryCard from '../../components/categoryCard';
import { Container, CardsContainer, Jumbotron } from './categories.styled-components';
import SearchIcon from '@mui/icons-material/Search';

const mockCategories = [
    {
        "name": "Greedy",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis.",
        "path": "/greedy"
    },
    {
        "name": "Dynamic Programming",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis.",
        "path": "dynamic-programming"
    },
    {
        "name": "Graphs and Trees",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis.",
        "path": "graphs-and-trees"
    },
];

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setCategories(mockCategories);
    }, []);

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