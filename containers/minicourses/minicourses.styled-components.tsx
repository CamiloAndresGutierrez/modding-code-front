import styled from 'styled-components';
import { mediaQueries } from 'lib/constants';

export const MinicoursesGrid = styled.div`
    padding: 0 100px;
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 50px;
    grid-gap: 50px;

    @media (${mediaQueries.tablet}) {
        padding: 0 40px;
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1000px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
