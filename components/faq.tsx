import React from 'react';

import styled from 'styled-components';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colors } from 'lib/constants';

type Question = {
    detail: string,
    answer: string
}

type FAQTypes = {
    questions: Question[]
}

const Title = styled.h1`
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const StyledDetails = styled(AccordionDetails)`
    background-color: #f8f9fa
`;

const FAQ = ({ questions }: FAQTypes) => {
    return (
        <div>
            <Title>FAQ</Title>
            {
                questions.map(question => {
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{question.detail}</Typography>
                            </AccordionSummary>
                            <StyledDetails>
                                <Typography>
                                    {question.answer}
                                </Typography>
                            </StyledDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

export default FAQ;