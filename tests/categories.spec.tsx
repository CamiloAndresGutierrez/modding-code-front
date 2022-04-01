import React from 'react';
import Categories from 'containers/categories';
import categoriesMock from '../public/mock/responses/getCategories.json';
import { shallow } from 'enzyme';
import Jumbotron from 'components/jumbotron';
import { CardsContainer } from 'containers/categories/categories.styled-components';

const categoriesComponent = props =>
    shallow(
        <Categories {...props} />
    );

describe('Categories page', () => {
    it('Jumbotron renders correct text', () => {
        const { categories } = categoriesMock;
        const component = categoriesComponent({ categories });

        expect(component.find(Jumbotron).prop('headline')).toBe('Algorithm categories');
    });

    it('Renders the categories', async () => {
        const { categories } = categoriesMock;
        const component = categoriesComponent({ categories });

        const categoriesList = component.find(CardsContainer).shallow().find("CategoryCard");
        expect(categoriesList).toHaveLength(1);
    })

    it('Does not render the categories', async () => {
        const component = categoriesComponent({
            categories: []
        });

        const categoriesList = component.find(CardsContainer).shallow().find("CategoryCard");
        expect(categoriesList).toHaveLength(0);
    })
})