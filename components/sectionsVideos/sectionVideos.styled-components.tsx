import { mediaQueries } from 'lib/constants';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const Container = styled.div`
    padding: 0 20px;

    ${props => (props.layout === '3' || props.layout === 3) && `padding: 0`};

    @media (${mediaQueries.desktop}) {
        padding: 0;
    }

    @media (${mediaQueries.mobile}) {
        height: auto;
    }
`;

export const Section = styled.div``;

export const Video = styled.div<{ layout }>`
    cursor: pointer;
    transition: all ease-in-out 300ms;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 0px 10px 50px 10px rgb(0 0 0 / 10%);
    }

    ${props => (props.layout === '3' || props.layout === 3) && `display: flex`};

    
    @media (${mediaQueries.desktop}) {
        display: flex;
    }
`;

const thumbnailTablet = `
    width: 150px;
    height: 80px;
    border-radius: 5px 0 0 5px;
`;

export const Thumbnail = styled.div<{ layout }>`
    height: 150px;
    border: 1px black solid;
    background-color: black;
    border-radius: 5px 5px 0 0;
    position: relative;

    ${props => (props.layout === '3' || props.layout === 3) && thumbnailTablet};

    @media (${mediaQueries.desktop}) {
        ${thumbnailTablet}
    }
`;

const VideoNameTablet = `
    width: 100%;
    border-radius: 0 5px 5px 0;
`;

export const VideoName = styled.div<{ layout }>`
    min-height: 80px;
    border-radius: 0 0 5px 5px;
    border: 1px lightgrey solid;
    padding: 10px;

    ${props => (props.layout === '3' || props.layout === 3) && VideoNameTablet};

    @media (${mediaQueries.desktop}) {
        ${VideoNameTablet}
    }

`;

export const SectionName = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const StyledPlayArrowIcon = styled(PlayArrowIcon)`
    position: absolute;
    color: white;
    width: 50px;
    height: 50px;
    right: 0;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
    margin-right: auto;
`;
