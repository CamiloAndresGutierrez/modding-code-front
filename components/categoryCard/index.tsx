import React from "react";
import {
    Container,
    CardHead,
    CardBody,
    CardButton,
} from './card.styled-components';
import { Category } from "lib/types/categories";
import { useRouter } from "next/router";

type CategoryCard = {
    category: Category,
}

const CategoryCard = (props: CategoryCard) => {
    const { category } = props;
    const { asPath } = useRouter();

    return (
        <Container>
            <CardHead>{category.name}</CardHead>
            <CardBody>
                {category.description}
            </CardBody>
            <a href={`${asPath}/${category.id}`}>
                <CardButton>
                    Open
                </CardButton>
            </a>
        </Container>
    );
};

export default CategoryCard;