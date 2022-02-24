import { colors } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
`;

export const ButtonGroup = styled.div<{ tab }>`
    margin-top: 50px;    
    height: 78px;
    max-width: 430px;
    border-radius: 25px;
    box-shadow: 0px 5px 30px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    margin-left: auto;
    margin-right: auto;

    > div {
        border-radius: 25px;
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;

    }

    .videos {
        ${props => props.tab === "videos" ?
        `background-color: ${colors.darkBlue};
        color: white;
        `
        : `white`};
    }
    .problems {
        ${props => props.tab === "problems" ? 
        `background-color: ${colors.darkBlue};
        color: white;
        ` 
        : `white`};
    }
`;
