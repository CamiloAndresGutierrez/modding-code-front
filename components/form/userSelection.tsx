import React from 'react';
import { Head, Selection } from './userSelection-styled-components';
import { Container } from './userSelection-styled-components';
import Button from '../button';
import { colors, USERS } from '../../lib/constants';
import { SimpleButton, NameArrowContainer } from './form-styled-components';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

type UserSelectionProps = {
    selectionHeadline: string;
    student: string;
    expert: string;
    handleUserType: Function;
    setCurrentStep: Function;
}

const UserSelection = (props: UserSelectionProps) => {
    const { selectionHeadline, student, expert, handleUserType, setCurrentStep } = props

    const handleStudent = () => {
        handleUserType(4, USERS.STUDENT);
    }

    const handleExpert = () => {
        handleUserType(3, USERS.EXPERT);
    }

    const handleCurrentStep = () => {
        setCurrentStep(1);
    }

    return (
        <Container>
            <Head >
                <NameArrowContainer >
                    <SimpleButton onClick={handleCurrentStep} color={colors.darkerBlue}>
                        <ArrowBackIosNewSharpIcon />
                    </SimpleButton>
                </NameArrowContainer>
                <h1 style={{ marginBottom: 0, textAlign: "center"}}>{selectionHeadline}</h1>
            </Head>
            <Selection >
                <Button ctaText={student} onClick={handleStudent} />
                <Button ctaText={expert} onClick={handleExpert} />
            </Selection>
        </Container>
    );

}

export default UserSelection;