import React from 'react';
import WaveLightBlue from 'public/svg/wave1_light_blue.svg';
import WaveDarkBlue from 'public/svg/wave1_dark_blue.svg';
import WaveDarkerBlue from 'public/svg/wave1_darker_blue.svg';
import styled from 'styled-components';
import { mediaQueries } from '../lib/constants';

export const WavesContainer = styled.div`
    svg {
        width: 100%;
    }
    @media (${mediaQueries.tablet}) {
        svg {
            width: 0;
        }
    }
`;

export const StyledWaveLightBlue = styled(WaveLightBlue)`
    position: absolute;
    bottom: 150px;
    left: 0;
    @media (${mediaQueries.desktopAndAbove}) {
        bottom: 10%;
    }
`;

export const StyledDarkBlueWave = styled(WaveDarkBlue)`
    position: absolute;
    bottom: 60px;
    left: 0;
    @media (${mediaQueries.desktopAndAbove}) {
        bottom: 0;
    }
`;

export const StyledDarkerBlueWave = styled(WaveDarkerBlue)`
    position: absolute;
    bottom: -20px;
    left: 0;
    @media (${mediaQueries.desktopAndAbove}) {
        bottom: -10%;
    }
`;


const Waves = () => {
    return (
        <WavesContainer>
            <StyledWaveLightBlue />
            <StyledDarkBlueWave />
            <StyledDarkerBlueWave />
        </WavesContainer>
    )
}

export default Waves;