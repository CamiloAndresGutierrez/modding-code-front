import React from 'react';
import minicoursesMock from '../public/mock/responses/getMinicourses.json';
import categoriesMock from '../public/mock/responses/getCategories.json';
import { shallow, mount } from 'enzyme';
import Jumbotron from 'components/jumbotron';
import MyMinicourses from 'containers/my-minicourses';
import { ExpertMinicourse, ExpertMinicoursesContainer } from 'containers/my-minicourses/my-minicourses.styled-components';

jest.mock('next/router', () => ({
    useRouter() {
        return ({
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        });
    },
}));

const myMinicoursesContainer = props =>
    mount(
        <MyMinicourses
            {...props}
        />
    );

describe('Minicourses page', () => {
    beforeEach(() => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");

        useRouter.mockImplementation(() => ({
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        }));
    })
    it('Jumbotron renders correct text', () => {
        const { minicourses } = minicoursesMock;
        const { categories } = categoriesMock;
        const component = myMinicoursesContainer({ minicourses, categories, accessToken: "token" });

        expect(component.find(Jumbotron).prop('headline')).toBe('Your Minicourses');
    });

    it('Renders the minicourses', async () => {
        const { minicourses } = minicoursesMock;
        const { categories } = categoriesMock;
        const component = myMinicoursesContainer({ minicourses, categories, accessToken: "token" })
            .find(ExpertMinicoursesContainer)
            .find(ExpertMinicourse);

        expect(component).toHaveLength(1);
    })

    it('Does not render any minicourses', async () => {
        const component = myMinicoursesContainer({
            minicourses: [],
            categories: [],
            accessToken: ""
        })
            .find(ExpertMinicoursesContainer)
            .find(ExpertMinicourse);

        expect(component).toHaveLength(0);
    })
})