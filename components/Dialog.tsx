import React from 'react';
import styled from 'styled-components';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { mediaQueries } from 'lib/constants';

type DialogProps = {
    title: string
}

const Container = styled.div`
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-top: 100px;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 50px 0 50px;
`

const StyledWarning = styled(ReportGmailerrorredIcon)`
    width: 50px;
    height: 50px;
`

const Dialog = ({ title }: DialogProps) => {
    return (
        <Container>
            <StyledWarning />
            <div>
                {title}
            </div>
        </Container>
    )
}

export default Dialog;