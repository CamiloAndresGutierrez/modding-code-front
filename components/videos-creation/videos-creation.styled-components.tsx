import { colors } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
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
        :hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 30px 5px ${colors.lightBlue};
        }
    }
`;

export const MinicourseName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Body = styled.div`
    margin-top: 30px;
`;