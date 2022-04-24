import { mediaQueries } from 'lib/constants';
import styled from 'styled-components';

export const Container = styled.div<{ height: string, displayMobileNav: boolean }>`
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

        position: relative;
        top: 0;
        z-index: 2;
        
        margin: auto;
        @media (${mediaQueries.mobile}) {
            padding: 0 10px;
        }
    }

    .logo {
        height: ${props => props.height ?? "100px"};
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

        @media (max-width: 513px) {
            display: none;
        }
    }

    .burger-icon {
        @media (min-width: 513px) {
            display: none;
        }

        @media (max-width: 513px) {
            display: block;
        }
    }

    .links-mobile-bar {
        height: 100px;
        width: 100%;
        background-color: white;
        
        position: relative;
        top: -100px;
        z-index: 1;

        box-shadow: 0px 20px 10px -15px rgba(0, 0, 0, 0.1);
        transition: all 500ms ease-in-out;

        ${props => props.displayMobileNav ?
            `
                opacity: 1;
                top: 0;
            ` :
            `
                opacity: 0;
            `
        }

        @media (min-width: 513px) {
            display: none;
        }

        @media (max-width: 513px) {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            list-style-type: none;
            gap: 20px;
        }
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