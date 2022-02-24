import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { formFields, userSelection, inputErrors, expertProfBackground } from './signup.content';
import {
    Container,
    FormContainer,
    ImageContainer,
    StyledForm
} from './signup.styled-components';
import { Form, UserSelection, ExpertBackground } from 'components/form';

const SingUpContainer = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [hasErrors, setHasErrors] = useState(true);
    const [formatIssues, setFormatIssues] = useState([]);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [userType, setUserType] = useState('');
    const [professionalBackground, setProfessionalBackground] = useState("");

    const checkFieldsFormat = () => {
        const { email, password, fields } = inputErrors();

        const isFieldEmpty = Object.keys(userInfo)
            .some(element => (userInfo[element] === ''));

        const emailRe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const isEmailFormat = emailRe.test(userInfo.email);

        const passwordRe = /^(?=.*\d)(?=.*[!@#$%^&.*,])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isPasswordFormat = passwordRe.test(userInfo.password);

        const aux = []
        if (isFieldEmpty) {
            aux.push(fields);
        };
        if (!isEmailFormat) {
            aux.push(email);
        };
        if (!isPasswordFormat) {
            aux.push(password);
        };

        setHasErrors(!isEmailFormat || isFieldEmpty || !isPasswordFormat);
        setFormatIssues(aux);
    };

    useEffect(() => {
        checkFieldsFormat();
    }, [userInfo]);

    useEffect(() => {
        if (step === 4) {
            const user = {
                ...userInfo,
                userType,
                professionalBackground,
            };
            console.log(`%c <-- user: -->`, 'background-color: black; color: white; font-weight: bold', user);
            router.push('login');
        }
    }, [step]);

    const setCurrentStep = (step) => {
        setStep(step);
    };

    const formInfo = (userInfo) => {
        setUserInfo(prevState => ({
            ...prevState,
            ...userInfo
        }));
    }

    const handleUserType = (step, type) => {
        setUserType(type);
        setStep(step);
    }

    const { headline, subHeadline, ctaText, fields } = formFields({
        ctaButton: 'Continue'
    });

    const { selectionHeadline, student, expert } = userSelection();

    const { expertHeadline } = expertProfBackground();

    return (
        <Container >
            <ImageContainer >
            </ImageContainer>
            <FormContainer >
                <StyledForm >
                    {step === 1 &&
                        <Form
                            fields={fields}
                            submitForm={setCurrentStep}
                            headline={headline}
                            subHeadline={subHeadline}
                            ctaText={ctaText}
                            formInfo={formInfo}
                            errors={formatIssues}
                            hasErrors={hasErrors}
                        />
                    }
                    {step === 2 &&
                        <UserSelection
                            selectionHeadline={selectionHeadline}
                            student={student}
                            expert={expert}
                            handleUserType={handleUserType}
                            setCurrentStep={setCurrentStep}
                        />
                    }
                    {step === 3 &&
                        <ExpertBackground
                            expertHeadline={expertHeadline}
                            handleBackground={setProfessionalBackground}
                            submitForm={setCurrentStep}
                        />
                    }

                </StyledForm>
            </FormContainer>
        </Container >
    )
}

export default SingUpContainer;
