import React, { useState } from "react";
import {
    Container,
    Head,
    Body,
    Uploader,
    Description,
    DescriptionContainer,
    BlueLink,
    ArrowForwardBlue
} from "./minicourse.styled-components";
import Tooltip from '@mui/material/Tooltip';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Minicourse = ({ minicourse }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        setShowDescription(showDescription ? false : true);
    }

    return (
        <Container >
            <Head >
                <img src={minicourse.thumbnail}></img>
            </Head>
            <Body>
                <h3>
                    {minicourse.name}
                </h3>
                <BlueLink onClick={handleClick}>
                    {showDescription ? 'Hide' : 'Show' } details
                    {showDescription ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                </BlueLink>
                {showDescription &&
                    <DescriptionContainer>
                        <Description onClick={handleClick}>
                            {minicourse.description}
                        </Description>
                        <Tooltip title="Take minicourse">
                            <ArrowForwardBlue />
                        </Tooltip>
                    </DescriptionContainer>
                }
                <Uploader>
                    by {minicourse.creator.name}
                </Uploader>
            </Body>
        </Container>
    )
}

export default Minicourse;