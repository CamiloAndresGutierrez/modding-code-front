import styled from 'styled-components';

import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

import { colors, mediaQueries } from 'lib/constants';

export const VideoContainer = styled.div`
    min-height: 100px;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    margin-bottom: 35px;
`;

export const ButtonGroup = styled.div`
    > button {
        color: black;
        border: none;
        background-color: transparent;
        :hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`;

export const UploadedVideo = styled.div`
    width: 100px;
    min-height: 100px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        height: 50px;
        width: 50px;
    }
`;

export const VideoInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    
    @media(max-width: 450px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const VideoInfo = styled.div`
    display: flex;
    gap: 10px;
    @media(max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const HR = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const StyledSaveIcon = styled(SaveIcon)`
    color: ${colors.darkBlue};
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
    color: red;

`;

export const SectionHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button<{ secondary?: Boolean }>`
    border: 0;
    ${props => props.secondary ? `
        background-color: transparent;
        color: black;
        border: 3px solid ${colors.darkBlue};
        :hover {
            transform: scale(1.05);
            background-color: ${colors.darkBlue};
            color: white;
        }
    ` :
        `
        background-color: ${colors.darkBlue};
        color: white;
        margin-right: 5px;
    `}
    font-weight: bold;
    height: 30px;
    width: 100px;
    font-size: 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all ease-in-out 200ms;
    :hover {
        transform: scale(1.05);
    }
`