import styled from 'styled-components';
import { mediaQueries } from '../../lib/constants';

export const Container = styled.div``;

export const CardsContainer = styled.div`
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

export const JumbotronSearch = styled.div`
    .search-bar  {
        padding: 40px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & > div {
            width: 70%;
            height: 40px;
            border-radius: 100px;
            -webkit-appearance: none;
            box-shadow: 0px 2px 30px 1px rgba(0, 0, 0, 0.15);
            margin-top: 12px;
            padding: 0 10px;
            display: flex;
            .mag-glass {
                width: 10%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                cursor: pointer;
            }
            .search-input {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                & > input {
                    width: 95%;
                    height: 90%;
                    border: 0;

                }
                & > input:focus {
                    outline: none;
                }
            }
            @media (${mediaQueries.tablet}) {
                width: 100%;
            }
        }

        @media (${mediaQueries.tablet}) {
            width: 100%;
            justify-content: center;
        }
    }

`;
