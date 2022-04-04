import styled from 'styled-components';
import { colors, mediaQueries } from '../../lib/constants';

export const Container = styled.div`
    display: flex;
    @media (${mediaQueries.tabletAndAbove}){
        height: 100vh;
    }
`;

export const FormContainer = styled.div`
    background-color: ${colors.lightBlue};
    width: 50%;
    padding-left: 40px;
    padding-right: 40px;

    @media (${mediaQueries.desktopAndAbove}) {
        width: 40%;
    }
    @media (${mediaQueries.tablet}) {
        width: 100%;
        background-color: white;
        padding-left: 0;
        padding-right: 0;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 50%;
    > img {
        width: 100%;
        position: absolute;
        bottom: -50px;
        right: 0;
    }
    > h1 {
        width: 100%;
        position: absolute;
        z-index: 10;
        top: 10%;
        padding: 50px;
    }
    > p {
        width: 50%;
        font-size: 20px;
        position: absolute;
        z-index: 10;
        top: 10%;
        margin-top: 50px;
        padding: 50px;
    }

    @media (${mediaQueries.tabletAndAbove}){
        height:calc(100% - 50px);
    }
    @media (${mediaQueries.desktopAndAbove}) {
        width: 60%;
    }
    @media (${mediaQueries.tablet}) {
        width: 0%;
        display: none;
    }
`;

export const StyledForm = styled.div`
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;
