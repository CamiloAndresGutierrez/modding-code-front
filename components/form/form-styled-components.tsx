import styled from 'styled-components';
import { mediaQueries } from '../../lib/constants';

export const Container = styled.div`
    background-color: white;
    min-height: 500px;
    padding: 40px 25px;
    box-shadow: 0px 30px 50px 25px #0000001A;
    border-radius: 10px;

    @media (${mediaQueries.tablet}) {
        border-radius: 0;
        box-shadow: none;
    }
`;

export const Head = styled.div`
    margin-bottom: 50px;
`;

export const InputTextFields = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledTextField = styled.div`
    margin-bottom: 10px;
    & > input {
        width: 100%;
        height: 58px;
        border-radius: 10px;
        -webkit-appearance: none;
        box-shadow: 0px 2px 30px 1px rgba(0, 0, 0, 0.15);
        border: 0;
        margin-top: 12px;
        padding: 0 20px;
    }
    & > input:focus {
        outline: none;
    }
`;

export const CTAButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px auto 10px auto;
`;

export const Errors = styled.div`
    color: red;
    font-size: 12px;
`;

export const SimpleButton = styled.button<{color}>`
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${props => props.color};
`;

export const NameArrowContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    @media (${mediaQueries.desktopAndAbove}) {
        display: none;
    }
`;
