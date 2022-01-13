import React from "react";
import {
    Container,
    CardHead,
    CardBody,
    CardButton,
} from './card.styled-components';

type CategoryCard = {
    head: string;
    body: string;
    ctaText: string;
    ctaLink: string;
}

const CategoryCard = (props: CategoryCard) => {
    const { head, body, ctaText, ctaLink } = props;

    const redirect = () => {
        window.location.href = ctaLink
    }
    
    return (
        <Container>
            <CardHead>{head}</CardHead>
            <CardBody>
                {body}
            </CardBody>
            <CardButton
                onClick={redirect}
            >
                {ctaText}
            </CardButton>
        </Container>
    );
};

export default CategoryCard;