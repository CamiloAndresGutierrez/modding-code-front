import styled from 'styled-components';
import { mediaQueries } from '../../lib/constants';

export const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 30px 50px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 40px 25px;

    @media (${mediaQueries.tablet}) {
        border-radius: 0;
        box-shadow: none;
    }
`;

export const Head = styled.div`
    margin-bottom: 50px;
`;

export const Selection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;