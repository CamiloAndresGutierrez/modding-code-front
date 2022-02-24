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
        width: 215px;
        font-size: 1.125rem;
        border-radius: 25px;
        cursor: pointer;
    }
`;

export const MinicourseName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Body = styled.div`
    margin-top: 30px;
`;