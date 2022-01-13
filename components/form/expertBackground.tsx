import React, { useState } from 'react';
import { Container, Head } from './userSelection-styled-components';
import { TextArea } from './expertBackground-styled-components';
import { CTAButton, SimpleButton, NameContainer, NameArrowContainer } from './form-styled-components';
import Button from '../button';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { colors } from '../../lib/constants';
import Name from '../Name';

type ExpertBackgroundProps = {
    expertHeadline: string;
    handleBackground: Function;
    submitForm: Function;
}

const ExpertBackground = (props: ExpertBackgroundProps) => {
    const [expertBackground, setExpertBackground] = useState('');
    const { expertHeadline, handleBackground, submitForm } = props;

    const handleTextArea = (e) => {
        setExpertBackground(e.target.value);
    };

    const handleSubmit = () => {
        handleBackground(expertBackground);
        submitForm(4);
    }

    const handleCurrentStep = () => {
        submitForm(2);
    }

    return (
        <Container>
            <Head>
                <NameArrowContainer>
                    <SimpleButton onClick={handleCurrentStep} color={colors.darkerBlue}>
                        <ArrowBackIosNewSharpIcon />
                    </SimpleButton>
                </NameArrowContainer>
                <h1 style={{ marginBottom: 0, textAlign: "center" }}>{expertHeadline}</h1>
            </Head>
            <form onSubmit={handleSubmit}>
                <TextArea
                    placeholder='Write here...'
                    onChange={handleTextArea}
                />
                <CTAButton >
                    <Button ctaText='Submit' />
                </CTAButton>
            </form>
        </Container>
    )
}

export default ExpertBackground;