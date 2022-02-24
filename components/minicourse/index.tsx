import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

import {
    Container,
    Head,
    Body,
    Uploader,
    Description,
    DescriptionContainer,
    BlueLink,
    ArrowForwardBlue,
    ArrowContainer,
    RedirectTitle
} from "./minicourse.styled-components";

const Minicourse = (props) => {
    const { minicourse } = props;
    const { push, asPath } = useRouter();
    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        setShowDescription(showDescription ? false : true);
    };

    const handleTakeMinicourse = (minicourse) => {
        push(`${asPath}/${minicourse.id}`, null, { shallow: true });
    };

    return (
        <Container >
            <Head >
                <img alt={`thumbnail-${minicourse.name}`} src={minicourse.thumbnail}></img>
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
                        <ArrowContainer onClick={() => handleTakeMinicourse(minicourse)}>
                            <RedirectTitle>
                                Take minicourse
                            </RedirectTitle>
                            <ArrowForwardBlue />
                        </ArrowContainer>
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
