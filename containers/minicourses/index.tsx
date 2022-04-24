import React, { useEffect, useState } from "react";

import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';
import { Rating } from "@mui/material";

import Minicourse from "components/minicourse";
import BackButton from 'components/back-button';
import Jumbotron from 'components/jumbotron';
import ReloadButton from "components/reload-button";

import { Minicourse as MinicourseType } from "lib/types/minicourse";

import content from './minicourses.content';
import { MinicoursesGrid, JumbotronSearch, Filters, FilterButton, Button, BackButtonContainer, FilterContainer } from "./minicourses.styled-components";
import Dialog from "components/Dialog";

type MinicourseContainerProps = {
    minicourses: MinicourseType[],
    shouldRefetch?: () => any;
}

const MinicoursesContainer = ({ minicourses, shouldRefetch }: MinicourseContainerProps) => {
    const [fetchedMinicourses, setFetchedMinicourses] = useState(minicourses);
    const [filteredMinicourses, setFilteredMinicourses] = useState(minicourses);
    const [anchorEl, setAnchorEl] = useState(null);
    const [rating, setRating] = useState(1);

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        const tmp = fetchedMinicourses.filter(minicourse => minicourse.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredMinicourses(tmp);
    }

    const handleFilterByRating = (newRating) => {
        const tmp = fetchedMinicourses.filter(minicourse => minicourse.rate === newRating);
        setFilteredMinicourses(tmp);
    }

    const handleRemoveFilter = () => {
        setFilteredMinicourses(fetchedMinicourses);
        setRating(0);
    }

    useEffect(() => {
        if (minicourses) {
            setFetchedMinicourses(minicourses);
            setFilteredMinicourses(minicourses);
        }
    }, [minicourses]);

    const { title: { headline, text } } = content();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRatingChange = (newValue) => {
        setRating(newValue);
        handleFilterByRating(newValue);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Jumbotron headline={headline} text={text}>
                <Filters>
                    {minicourses.length ?
                        <>
                            <FilterButton>
                                <Button onClick={handleClick}>
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
                        </> : null
                    }
                </Filters>
            </Jumbotron>
            {minicourses.length ?
                <>
                    <BackButtonContainer >
                        <div>
                            <BackButton />
                        </div>
                        <div>
                            <ReloadButton callBack={shouldRefetch} />
                        </div>
                    </BackButtonContainer>

                    <MinicoursesGrid >
                        {Array.isArray(filteredMinicourses) && filteredMinicourses.map(minicourse => (
                            <div key={minicourse.id}>
                                <Minicourse minicourse={minicourse} />
                            </div>
                        ))}
                    </MinicoursesGrid>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <FilterContainer>
                            <p>Filter by rating:</p>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    handleRatingChange(newValue);
                                }}
                            />
                            <Button onClick={handleRemoveFilter}>Remove filter</Button>
                        </FilterContainer>
                    </Popover>
                </> : <Dialog title="Sorry, there are no minicourses available. Please come back later." />
            }

        </div>
    )
}

export default MinicoursesContainer;
