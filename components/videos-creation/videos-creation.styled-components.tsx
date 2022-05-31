import { colors, mediaQueries } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div > button {
        border: 0;
        background-color: ${colors.darkBlue};
        color: white;
        font-weight: bold;
        height: 50px;
        width: 150px;
        font-size: 1rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all ease-in-out 200ms;

        @media (${mediaQueries.tablet}) {
            margin-top: 20px;
        }

        :hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 30px 5px ${colors.lightBlue};
        }
    }

    .student-view-button {
        background-color: white;
        border: 1px solid ${colors.darkBlue};
        color: black;
        margin-right: 10px;
        :hover {
            background-color: ${colors.darkBlue};
            color: white;
        }
    }

    @media (${mediaQueries.tablet}) {
        flex-direction: column;
    }


`;

export const MinicourseName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Body = styled.div`
    margin-top: 30px;
`;