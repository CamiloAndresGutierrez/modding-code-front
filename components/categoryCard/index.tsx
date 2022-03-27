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
    const { asPath, push } = useRouter();

    const handleOpenClick = () => {
        push(`${asPath}/${category.id}`);
    }

    return (
        <Container>
            <CardHead>{category.name}</CardHead>
            <CardBody>
                {category.description}
            </CardBody>
            <CardButton
                onClick={handleOpenClick}
            >
                Open
            </CardButton>
        </Container>
    );
};

export default CategoryCard;