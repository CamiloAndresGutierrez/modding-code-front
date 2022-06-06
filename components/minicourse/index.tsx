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
import { Rating } from "@mui/material";

const Minicourse = (props) => {
    const { minicourse } = props;
    const { push, asPath } = useRouter();
    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        setShowDescription(showDescription ? false : true);
    };

    const handleTakeMinicourse = (minicourse) => {
        push(`${asPath}/${minicourse.id}`);
    };

    return (
        <Container >
            <Head >
                <img alt={`thumbnail-${minicourse.name}`} src={minicourse.thumb_download_url}></img>
            </Head>
            <Body>
                <h3>
                    {minicourse.name}
                </h3>
                <BlueLink onClick={handleClick}>
                    {showDescription ? 'Hide' : 'Show'} details
                    {showDescription ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </BlueLink>
                {showDescription &&
                    <DescriptionContainer>
                        <Description onClick={handleClick}>
                            {minicourse.description ?? "No description"}
                        </Description>
                    </DescriptionContainer>
                }
                {
                    minicourse.rate ? (
                        <Rating
                            name="read-only"
                            value={minicourse.rate ?? 0}
                            precision={0.5}
                            readOnly
                        />
                    ) : null
                }

                <ArrowContainer onClick={() => handleTakeMinicourse(minicourse)}>
                    <RedirectTitle>
                        Take minicourse
                    </RedirectTitle>
                    <ArrowForwardBlue />
                </ArrowContainer>
                <Uploader>
                    by {minicourse.username}
                </Uploader>
            </Body>
        </Container>
    )
}

export default Minicourse;
