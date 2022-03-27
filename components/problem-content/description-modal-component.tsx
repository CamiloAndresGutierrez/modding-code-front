import React from 'react';
import {
    ButtonGroupModal,
    DescriptionContainer
} from './problem-content.styled-components'

const DescriptionModalComponent = ({
    problemDescription,
    problemSampleInput,
    problemSampleOutput,
    handleChange,
    handleModalBehaviour
}) => (
    <DescriptionContainer>
        <h3>Problem description</h3>
        <textarea
            value={problemDescription}
            onChange={(e) => handleChange(e, "description")}
            placeholder={"Problem description"}
            className={"editor"}
        ></textarea>

        <h3>Sample input</h3>
        <textarea
            value={problemSampleInput}
            onChange={(e) => handleChange(e, "sampleInput")}
            placeholder={"Write here the sample input."}
            className={"sample"}
        ></textarea>

        <h3>Sample output</h3>
        <textarea
            value={problemSampleOutput}
            onChange={(e) => handleChange(e, "sampleOutput")}
            placeholder={"Write here the output of your sample input."}
            className={"sample"}
        ></textarea>

        <ButtonGroupModal>
            <button className={"cancel"} onClick={() => handleModalBehaviour()}>Done</button>
        </ButtonGroupModal>
    </DescriptionContainer>
)

export default DescriptionModalComponent;