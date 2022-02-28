import styled from 'styled-components';

export const Container = styled.div<{ height }>`
    height: ${props => props.height ?? "100px"};
    background-color: white;
    box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    & > nav {
        max-width: 1700px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .links {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        list-style-type: none;
        gap: 20px;
    }
`;

export const NavButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    :hover {
        cursor: pointer;
    }
`;