import styled from 'styled-components';
import { mediaQueries, colors } from 'lib/constants';

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


export const JumbotronSearch = styled.div`
    flex-grow: 1;
    .search-bar  {
        padding: 40px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        & > div {
            width: 100%;
            height: 40px;
            border-radius: 100px;
            -webkit-appearance: none;
            box-shadow: 0px 2px 30px 1px rgba(0, 0, 0, 0.15);
            padding: 0 10px;
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


export const Filters = styled.div`
    display: flex;
    gap: 10px;

`;

export const FilterButton = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    @media (${mediaQueries.tablet}) {
        justify-content: flex-start;
    };
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px;
    background-color: ${colors.darkBlue};
    border: none;
    border-radius: 50px;
    width: 90px;
    height: 40px;
    color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    :hover {
        transform: scale(1.1);
    }
    
    @media (${mediaQueries.tablet}) {
        width: 100%;
    }
`;

export const BackButtonContainer = styled.div`
    padding: 0 100px;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    margin-top: -10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    
    > div {
        width:  40px;
        height: 40px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 100px;
        transition: all ease-in-out 300ms;
        position: relative;

        &:hover{
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.50);

            cursor: pointer;
        }

        > div > svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            margin-right: auto;
            margin-left: auto;
        }

    }


    @media (${mediaQueries.tablet}) {
        padding: 0 40px;
    }
`;

export const FilterContainer = styled.div`
    padding: 20px;
    width: 180px;
    height: 150px;
    > button {
        margin-top: 20px;
    }
`;