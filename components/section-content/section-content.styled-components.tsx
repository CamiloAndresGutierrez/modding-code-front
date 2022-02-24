import styled from 'styled-components';

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
    
    @media(max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        

    }
`;

export const VideoInfo = styled.div`

`;
