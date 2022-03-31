import React from 'react';
import minicoursesMock from '../public/mock/responses/getMinicourses.json';
import { shallow } from 'enzyme';
import Jumbotron from 'components/jumbotron';
import MinicoursesContainer from 'containers/minicourses';
import { MinicoursesGrid } from 'containers/minicourses/minicourses.styled-components';

const minicoursesContainer = props =>
    shallow(
        <MinicoursesContainer
            {...props}
        />
    );

describe('Minicourses page', () => {
    it('Jumbotron renders correct text', () => {
        const { minicourses } = minicoursesMock;
        const component = minicoursesContainer({ minicourses });

        expect(component.find(Jumbotron).prop('headline')).toBe('Minicourses');
    });

    it('Renders the minicourses', async () => {
        const { minicourses } = minicoursesMock;
        const component = minicoursesContainer({ minicourses });

        const minicoursesList = component.find(MinicoursesGrid).shallow().find("Minicourse");
        expect(minicoursesList).toHaveLength(1);
    })

    it('Does not render the minicourses', async () => {
        const component = minicoursesContainer({
            minicourses: []
        });

        const minicoursesList = component.find(MinicoursesGrid).shallow().find("Minicourse");
        expect(minicoursesList).toHaveLength(0);
    })
})