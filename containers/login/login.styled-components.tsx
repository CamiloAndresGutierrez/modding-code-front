import styled from 'styled-components';
import { colors, mediaQueries } from 'lib/constants';

export const Container = styled.div`
    position: relative;
    background-color: ${colors.lighterBlue};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow-y: hidden;
    @media (${mediaQueries.tablet}) {
        background-color: white;
    }
`;

export const FormContainer = styled.div`
    position: absolute;
    width: 462px;
    @media (${mediaQueries.tablet}) {
        width: 100%;
        top: 100px;
    }
`;
