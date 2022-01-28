import styled from 'styled-components';
import { colors } from '../../lib/constants';
import Button, { StyledButton } from '../button';

export const Container = styled.div`
    height: 300px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 10px 25px 10px rgba(0, 0, 0, 0.25);
    }
    
`;

export const CardHead = styled.div`
    
    height: 88px;
    background-color: ${colors.darkBlue};
    border-radius: 15px 15px 0px 0px;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    padding: 20px 15px;
    text-align: center;
`;

export const CardBody = styled.div`
    height: 100px;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin: 40px 20px 0 20px;
    overflow: auto;
`;

export const CardButton = styled(StyledButton)`
    background-color: ${colors.darkBlue};
    height: 38px;
    width: 107px;
    border-radius: 100px;
    box-shadow: none;
    margin: 10px 26px 0 26px;
    float: right;
    box-shadow: 0px 5px 15px 1px rgba(0, 153, 255, 0.4);
    
    &:hover {
        background-color: ${colors.darkBlue};
        box-shadow: 0px 5px 15px 10px rgba(0, 153, 255, 0.4);
    }
`;