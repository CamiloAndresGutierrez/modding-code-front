import React from 'react';
import styled from 'styled-components';
import { colors } from '../../lib/constants';

export const StyledButton = styled.button`
    background-color: ${props => props.disabled ? colors.grey : colors.darkerBlue};
    color: ${props => props.disabled ? 'grey' : colors.white};
    border: 0;
    width: 60%;
    height: 60px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border-radius: 10px;
    font-size: 1rem;
    ${props => !props.disabled && `box-shadow: 0px 5px 30px 10px #00000040;`}
    &:hover {
        ${props => !props.disabled && `background-color: #000642;`}
    }
`;

type ButtonProps = {
    ctaText?: string;
    onClick?: Function;
    disabled?: boolean;
    children?: React.ReactNode;
}

const Button = ({ ctaText = null, onClick = () => null, disabled = false, children = null }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} >
            {ctaText ?? children}
        </StyledButton>
    )
}

export default Button;