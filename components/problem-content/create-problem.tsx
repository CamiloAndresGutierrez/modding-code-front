import React, { useState } from 'react';
import { connect } from 'react-redux';

import { StyledRating } from 'components/ProblemList/problemsList.styled-components';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { State } from 'lib/types/state';

import Modal from 'components/modal';
import {
  ButtonGroupModal,
  Container,
  DescriptionContainer,
  DetailsButtonGroup,
  StyledSaveDescription,
  StyledSaveIcon
} from './problem-content.styled-components';
import { CREATE_PROBLEM } from 'lib/client/problems';
import makeRequest from 'lib/client';
import { url } from 'lib/constants';
import { missingFields } from 'lib/constants/errorMessages';
import { videoCreationSuccess } from 'lib/constants/successMessages';
import DescriptionModalComponent from './description-modal-component';

const CreateProblem = ({ currentMinicourse, accessToken }) => {
  const [problemName, setProblemName] = useState("");
  const [description, setDescription] = useState({
    description: '',
    sample_input: '',
    sample_output: '',
  });
  const [difficulty, setDifficulty] = useState(1);
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "name":
        setProblemName(value);
        break;
      case "description":
        setDescription({
          ...description,
          description: value
        });
        break;
      case "sampleInput":
        setDescription({
          ...description,
          sample_input: value
        });
        break;
      case "sampleOutput":
        setDescription({
          ...description,
          sample_output: value
        });
        break;
      default:
        break;
    }
  };

  const handleDifficultyChange = (newValue) => {
    setDifficulty(newValue);
  };

  const resetFields = () => {
    setProblemName("");
    setDescription({
      description: '',
      sample_input: '',
      sample_output: '',
    });
    setDifficulty(0);
  }

  const updateVideo = async (videoId: string) => {
    const { requestUrl, body, method } = CREATE_PROBLEM({
      id: videoId,
      description: {
        description: description.description,
        sample_input: description.sample_input,
        sample_output: description.sample_output
      }
    });

    await makeRequest(url(requestUrl), body, method, accessToken);
  }

  const handleSubmit = async () => {
    const isFilled = [
      problemName,
      description.description,
      description.sample_input,
      description.sample_output
    ].some(element => element.length === 0);

    if (!isFilled) {
      const { requestUrl, body, method } = CREATE_PROBLEM({
        name: problemName,
        minicourse_id: currentMinicourse.id,
        difficulty: difficulty
      });

      const response = await makeRequest(url(requestUrl), body, method, accessToken);
      updateVideo(response.id);
      resetFields();
      alert(videoCreationSuccess);
    } else { alert(missingFields) }
  }

  const handleModalBehaviour = () => {
    setShouldShowModal(!shouldShowModal);
  }

  return (
    <Container>
      <input value={problemName} placeholder={"Name"} onChange={(e) => handleInputChange(e, "name")}></input>

      <StyledRating
        name="simple-controlled"
        value={difficulty}
        precision={0.5}
        icon={<CircleIcon />}
        emptyIcon={<CircleOutlinedIcon />}
        onChange={(event, newValue) => {
          handleDifficultyChange(newValue);
        }}
      />

      <DetailsButtonGroup >
        <button className={"description"} onClick={() => handleModalBehaviour()}>Description</button>
      </DetailsButtonGroup >

      <button type={"button"} onClick={() => handleSubmit()}><StyledSaveIcon /></button>

      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={handleModalBehaviour}
      >
        <DescriptionModalComponent
          problemDescription={description.description}
          problemSampleInput={description.sample_input}
          problemSampleOutput={description.sample_output}
          handleChange={handleInputChange}
          handleModalBehaviour={handleModalBehaviour}
        />
      </Modal>

    </Container>
  )
};

export const mapStateToProps = (state: State) => {
  return ({
    currentMinicourse: state.minicourses.currentMinicourse,
    accessToken: state.site.accessToken
  })
}

export default connect(mapStateToProps, null)(CreateProblem);
