import styled from 'styled-components';
import { colors, mediaQueries } from 'lib/constants';

export const Container = styled.div`
    color: white;
    position: relative;
`;

export const FlexContainer = styled.div`
    max-width: 1200px;
    height: 600px;
    display: flex;
    gap: 20px;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;

    @media(${mediaQueries.tablet}) {
        flex-direction: column;
        height: 800px;
        padding: 0;
    }

`;

export const ProblemContext = styled.div`
    background-color: ${colors.lightBlack};
    width: 40%;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    overflow: auto;
    @media(${mediaQueries.tablet}) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        overflow: visible;
    }
`;

export const CodeEditor = styled.div`
    width: 60%;
    background-color: ${colors.lightBlack};
    padding: 26px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

    @media(${mediaQueries.tablet}) {
        height: 600px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ProblemName = styled.h2`
    display: flex;
    gap: 20px;
    max-width: 1200px;
    padding: 20px 20px;
    margin-left: auto;
    margin-right: auto;
    @media(${mediaQueries.tablet}) {
        width: 90%;
        padding: 20px 0;
    }
`;

export const ProblemDescription = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ResultsContainer = styled.div`
    height: 100px;
    width: 100%;
    background-color: ${colors.lighterBlack};
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    overflow-x: auto;
    align-items: center;
    gap: 5px;
    padding: 0 20px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 20px;

    > button {
        border: none;
        color: white;
        background-color: ${colors.purple};
        border-radius: 5px;
        height: 40px;
        width: 80px;
        cursor: pointer;
        transition: all ease-in-out 200ms;

        &:hover{
            transform: scale(1.125);
        }
    }

    > select {
        width: 170px;
        background-color: ${colors.lighterBlack};
        color: white;
    }
`;

export const TestCaseContainer = styled.div`
    height: 50px;
    width: 130px;
    border-radius: 5px;
    background-color: ${colors.lightBlack};
    flex-shrink: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;

    > span {
        width: 20px !important;
        height: 20px !important;
    }
`;

export const InfoButton = styled.div`
    background-color: ${colors.purple};
    height: 50px;
    width: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    cursor: pointer;
    transition: all ease-in-out 200ms;

    &:hover{
        transform: scale(1.125);
    }
`

export const QuesitonBox = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    row-gap: 20px;
    width: 80%;

    & p {
        color: black;
        margin-bottom: 10px;
    }

    & div {
        width: 90%;
        padding-top: 20px;
    }

    & input {
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: none;
        background-color: lightcyan;
        outline: none;
        padding: 15px;
    }

    & textarea {
        width: 100%;
        resize: none;
        border-radius: 10px;
        border: none;
        background-color: lightcyan;
        outline: none;
        padding: 15px;
    }

    & button {
        width: 90%;
        background-color: ${colors.purple};
        color: white;
        height: 50px;
        border: none;
        border-radius: 10px;
        transition: all ease-in-out 200ms;

        &:hover{
            transform: scale(1.125);
        }

        &:active {
            background-color: ${colors.lightBlack};
        }
    }
`

export const Veredict = styled.div`
    border: 1px ${colors.purple} solid;
    color: white;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px;
    justify-content: space-between;

    > span {
        width: 20px !important;
        height: 20px !important;
    }
`