import React, { useEffect, useState } from "react";
import Minicourse from "components/minicourse";
import { MinicoursesGrid } from "./minicourses.styled-components";
import { useRouter } from 'next/router';
import BackButton from 'components/back-button';
import SearchIcon from '@mui/icons-material/Search';
import Jumbotron from 'components/jumbotron';
import { fetchAllMinicourses } from 'lib/client/minicourses'
import content from './minicourses.content.ts';

const MinicoursesContainer = () => {
    const router = useRouter();
    const [minicourses, setMinicourses] = useState([]);

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
        fetchAllMinicourses()
          .then(response => response.json())
          .then(r => setMinicourses(r));
    }, []);

    const { title: {headline, text} } = content();

    return (
        <div>
            <Jumbotron headline={headline} text={text}>
              <div className={'finder'}>
                <div className={"filters"}>
                    <button>
                        Filter
                    </button>
                </div>
                <div >
                    <div className={"search-input"}>
                        <input onChange={handleInputChange} onKeyPress={handleEnterKey} type={"text"} placeholder={`Search...`}></input>
                    </div>
                    <div className={"mag-glass"} onClick={handleSearch}>
                        <SearchIcon />
                    </div>
                </div>
              </div>
            </Jumbotron>
            <BackButton ctaLink={"/categories"}/>
            {
                <MinicoursesGrid >
                    {minicourses.map(minicourse => (
                        <div key={minicourse.id}>
                            <Minicourse minicourse={minicourse} />
                        </div>
                    ))}
                </MinicoursesGrid>
            }

        </div>
    )
}

export default MinicoursesContainer;
