import styled from 'styled-components';
import { colors, mediaQueries } from 'lib/constants';
import { ArrowForward } from "@mui/icons-material";

export const Container = styled.div`
    min-height: 300px;
    border-radius: 10px;
    box-shadow: 0px 10px 25px 10px rgba(0, 0, 0, 0.15);
    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 10px 25px 10px rgba(0, 0, 0, 0.25);
    }

`;

export const Head = styled.div`
    height: 200px;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
`;
export const Body = styled.div`
    position: relative;
    padding: 15px 15px;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    @media (${mediaQueries.mobile}) {
        display: block;
    }
    transition: min-height 1s ease;

`;

export const Uploader = styled.div`
    color: grey;
    margin-top: auto;
`;

export const Description = styled.div`

`;

export const DescriptionContainer = styled.div`
    margin-bottom: 20px;
`;

export const BlueLink = styled.div`
    cursor: pointer;
    color: ${colors.darkBlue};
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

`;

export const ArrowContainer = styled.div`
    display: flex;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const RedirectTitle = styled.div`
    color: ${colors.darkBlue};
    cursor: pointer;
    margin-right: 5px;
`;

export const ArrowForwardBlue = styled(ArrowForward)`
    color: ${colors.darkBlue};
    text-align: right;
`
