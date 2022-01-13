import React from "react";
import styled from 'styled-components';

const NameContainer = styled.div<{fontSize, color}>`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    letter-spacing: 1px;
    font-weight: 700px;
`;

type NameProps = {
    fontSize?: string;
    color?: string;
}

const Name = ({fontSize = "2rem", color = "black"}: NameProps) => {
    return (
        <NameContainer 
            fontSize={fontSize}
            color={color}
        >
            Modding Code
        </NameContainer>
    )

}

export default Name;