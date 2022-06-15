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
import { REGISTER_USER } from 'lib/client/user';
import makeRequest from 'lib/client';
import { url } from 'lib/constants';
import { responseHasErrors } from 'lib/utils';
import { registrationError } from 'lib/constants/errorMessages';
import { nameToUser } from 'lib/constants/users';

const SingUpContainer = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [hasErrors, setHasErrors] = useState(true);
    const [formatIssues, setFormatIssues] = useState([]);
    const [userInfo, setUserInfo] = useState({
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
            const { requestUrl, body, method } = REGISTER_USER({ ...userInfo, role: nameToUser.get(userType) });
            try {

                const response = makeRequest(url(requestUrl), body, method);
                if (responseHasErrors(response, registrationError)) return;
                router.push('login');
            }
            catch (e) {
                alert(registrationError);
            }
        }
    }, [step]);

    const setCurrentStep = (step?: number) => {
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
                <img src='/images/background.png'></img>
                <h1>Modding Code&trade;</h1>
                <p>
                    The platform where you can practice and study coding problems to nail that job interview!
                    <br />
                    <br />
                    You can also help others by signing up as an expert and creating minicourses about the algorithms that you know the most!
                </p>
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
