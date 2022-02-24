import { colors, mediaQueries } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .textarea {
        border: none;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 2px 30px 1px rgba(0, 0, 0, 0.15);
        resize: none;
        height: 100px;

        &:focus {
            outline: none;
        }

    }

    .search-bar  {
        display: flex;
        align-items: center;

        & > div {
            width: 100%;
            height: 40px;
            border-radius: 10px;
            -webkit-appearance: none;
            box-shadow: 0px 2px 30px 1px rgba(0, 0, 0, 0.15);
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            & > input {
                width: 100%;
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

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const ImgContainer = styled.div`
    width: 100%;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
`;

export const SaveButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    background-color: ${colors.darkerBlue};
    border-radius: 10px;
    color: white;
    cursor: pointer;
`;

export const CancelButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    border: 2px ${colors.darkerBlue} solid;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${colors.darkerBlue};
        color: white;
    }

`;

export const SetCategories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    background-color: ${colors.darkerBlue};
    border-radius: 10px;
    color: white;
    cursor: pointer;
`;

export const CategoriesContainer = styled.div`
    max-height: 80px;
    overflow: auto;
`;

export const ErrorMessage = styled.div`
    color: red;
`;