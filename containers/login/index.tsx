import React, { useEffect, useState } from "react";
import { Container, FormContainer } from './login.styled-components';
import Waves from "../../components/Waves";
import { content } from './login.content';

import { Form } from "../../components/form";
import { inputErrors } from "../signup/signup.content";


const LoginContainer = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
    const [hasErrors, setHasErrors] = useState(true);
    const [formatIssues, setFormatIssues] = useState([]);
    
    const checkFieldsFormat = () => {
        const { email, fields } = inputErrors();

        const isFieldEmpty = Object.keys(userInfo)
            .some(element => (userInfo[element] === ''));

        const emailRe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const isEmailFormat = emailRe.test(userInfo.email);

        const aux = []
        if (isFieldEmpty) {
            aux.push(fields);
        };
        if (!isEmailFormat) {
            aux.push(email);
        };

        setHasErrors(!isEmailFormat || isFieldEmpty );
        setFormatIssues(aux);
    };

    useEffect(() => {
        checkFieldsFormat();
    }, [userInfo]);

    const {
        headline,
        subheadline,
        fields
    } = content();

    const formInfo = (userInfo) => {
        setUserInfo(prevState => ({
            ...prevState,
            ...userInfo
        }));
    }

    const submitForm = () => {
        console.log("Hello");
    }

    return (
        <Container>
            <Waves />
            <FormContainer >
                <Form
                    fields={fields}
                    headline={headline}
                    subHeadline={subheadline}
                    ctaText={"Login"}
                    hasErrors={hasErrors}
                    errors={formatIssues}
                    submitForm={submitForm}
                    formInfo={formInfo}
                />
            </FormContainer>
        </Container>
    )

}

export default LoginContainer;