import React from "react";
import styled from 'styled-components';

const NameContainer = styled.div<{ fontSize, color }>`
    position: relative;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    letter-spacing: 1px;
    font-weight: 700px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;

    & img {
        position: relative;
        width: 50px;
        height: 50px;
    }

    & .brand {
        position: relative;
        width: 200px;
        height: 50px;

        & p {
            position: absolute;
            width: 100%;
            transform: translate(0, -50%);
            top: 50%;
        }
    }
`;

type NameProps = {
    fontSize?: string;
    color?: string;
}

const Name = ({ fontSize = "2rem", color = "black" }: NameProps) => {
    return (
        <NameContainer
            fontSize={fontSize}
            color={color}
        >
            <img src="/logo.png" alt="logo img" />
            <div className="brand"><p>Modding Code</p></div>
        </NameContainer>
    )

}

export default Name;