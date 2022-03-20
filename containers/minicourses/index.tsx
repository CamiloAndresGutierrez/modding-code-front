import React, { useEffect, useState } from "react";
import FilterListIcon from '@mui/icons-material/FilterList';

import Minicourse from "components/minicourse";
import { MinicoursesGrid, JumbotronSearch, Filters, FilterButton, Button, BackButtonContainer } from "./minicourses.styled-components";
import BackButton from 'components/back-button';
import Jumbotron from 'components/jumbotron';
import content from './minicourses.content';
import ReloadButton from "components/reload-button";
import { Minicourse as MinicourseType } from "lib/types/minicourse";

type MinicourseContainerProps = {
    minicourses: MinicourseType[],
}

const MinicoursesContainer = ({ minicourses }: MinicourseContainerProps) => {
    const [fetchedMinicourses, setFetchedMinicourses] = useState([]);
    const [filteredMinicourses, setFilteredMinicourses] = useState([]);

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        const tmp = fetchedMinicourses.filter(minicourse => minicourse.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredMinicourses(tmp);
    }

    useEffect(() => {
        if (minicourses) {
            setFetchedMinicourses(minicourses);
            setFilteredMinicourses(minicourses);
        }
    }, [minicourses]);

    const { title: { headline, text } } = content();

    return (
        <div>
            <Jumbotron headline={headline} text={text}>
                <Filters>
                    <FilterButton>
                        <Button >
                            Filters
                            <FilterListIcon />
                        </Button>
                    </FilterButton>
                    <JumbotronSearch >
                        <div className={"search-bar"}>
                            <div>
                                <input onChange={handleInputChange} type={"text"} placeholder={`Search...`}></input>
                            </div>
                        </div>
                    </JumbotronSearch>
                </Filters>
            </Jumbotron>
            <BackButtonContainer >
                <div>
                    <BackButton />
                </div>
                <div>
                    <ReloadButton />
                </div>
            </BackButtonContainer>
            {
                <MinicoursesGrid >
                    {Array.isArray(filteredMinicourses) && filteredMinicourses.map(minicourse => (
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
