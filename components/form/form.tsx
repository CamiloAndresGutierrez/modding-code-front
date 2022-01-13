import React, { useState } from 'react';
import { Checkbox, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { InputFields } from '../../lib/types';
import Button from '../button';
import {
    Container,
    Head,
    InputTextFields,
    StyledTextField,
    CTAButton,
    Errors,
} from './form-styled-components';
import { colors } from '../../lib/constants';

interface SingUpContainerProps {
    fields: InputFields[]
    headline: string;
    subHeadline: string;
    ctaText: string;
    hasErrors: boolean;
    errors: string[];
    submitForm: Function;
    formInfo: Function;
}

const Form = (props: SingUpContainerProps) => {
    const [showErrors, setShowErrors] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const {
        fields,
        headline,
        subHeadline,
        ctaText,
        submitForm,
        formInfo,
        errors,
        hasErrors
    } = props;

    const handleInput = (event) => {
        const { target: { name, value } } = event;
        formInfo({ [name]: value });
    }

    const handleSubmit = () => {
        if (hasErrors) setShowErrors(hasErrors);
        else submitForm(2);
    }

    const togglePasswordShow = (e) => {
        setShowPassword(e.target.checked);
    }

    return (
        <Container>
            <Head>
                <h1 style={{ marginBottom: 0 }}>{headline}</h1>
                <p dangerouslySetInnerHTML={{__html: subHeadline}} />
            </Head>
            <InputTextFields >
                {
                    fields.map((element, index) => {
                        return (
                            <StyledTextField
                                key={index}
                            >
                                <label >{element.placeHolder}</label>
                                <input
                                    className={'text-input'}
                                    type={element.type === 'password' && showPassword ? 'text' : element.type}
                                    onChange={handleInput}
                                    name={element.field}
                                />
                            </StyledTextField>
                        )
                    })
                }
            </InputTextFields>

            <FormControlLabel
                value="end"
                control={<Checkbox onChange={togglePasswordShow} sx={{
                    color: colors.darkerBlue,
                    '&.Mui-checked': {
                        color: colors.darkerBlue,
                    },
                }} />}
                label="Show password"
                labelPlacement="end"
            />

            <Errors>
                {showErrors &&
                    <ul>
                        {errors.map((element, index) => <li key={index}>{element}</li>)}
                    </ul>
                }
            </Errors>

            <CTAButton >
                <Button ctaText={ctaText} onClick={handleSubmit} />
            </CTAButton>
        </Container>
    )
}

export default Form;