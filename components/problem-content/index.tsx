import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { useFetch } from 'utils/hooks/useFetch';
import Modal from 'components/modal';
import { StyledRating } from 'components/ProblemList/problemsList.styled-components';

import DescriptionModalComponent from './description-modal-component';
import TestCasesModalComponent from './testcases-modal-component';
import {
  ButtonGroup,
  Container,
  DetailsButtonGroup,
  ProblemInfo,
  StyledSaveIcon,
} from './problem-content.styled-components';

import { genericError, problemUpdateFailed, problemVisibilityFailed, videoFailedVisibilityChange2 } from 'lib/constants/errorMessages';
import { CREATE_PROBLEM, UPDATE_PROBLEM } from 'lib/client/problems';
import makeRequest from 'lib/client';
import { UPLOAD_PROBLEM_TESTCASE } from 'lib/client/problems';
import { url } from 'lib/constants';
import { State } from 'lib/types/state';
import { responseHasErrors } from 'lib/utils';
import { Tooltip } from '@mui/material';

const ProblemContent = ({ problem, accessToken }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [newTestCase, setNewTestCase] = useState(false);
  const [problemName, setProblemName] = useState(problem.name);
  const [problemDescription, setProblemDescription] = useState(problem.description);
  const [problemDifficulty, setProblemDifficulty] = useState(problem.difficulty);
  const [testCases, setTestCases] = useState<{ inputFile: File, outputFile: File }>({
    inputFile: null,
    outputFile: null
  });
  const [hasChanged, setHasChanged] = useState(false);
  const uploadTestCases = useFetch({
    ...UPLOAD_PROBLEM_TESTCASE(problem.id || "", testCases.inputFile?.name || "", testCases.outputFile?.name || ""),
    shouldDoFetch: false
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLInputElement>(null);

  const handleModalBehaviour = (modalInfo = null) => {
    if (modalInfo) setModalInfo(modalInfo)
    setShouldShowModal(!shouldShowModal);
  };

  const handleChange = (event, descriptionSection) => {
    setHasChanged(true);
    const value = event.target.value;
    switch (descriptionSection) {
      case "description":
        setProblemDescription({
          ...problemDescription,
          description: value
        });
        break;
      case "sampleInput":
        setProblemDescription({
          ...problemDescription,
          sample_input: value
        });
        break;
      case "sampleOutput":
        setProblemDescription({
          ...problemDescription,
          sample_output: value
        });
        break;
      case "problemName":
        setProblemName(value);
        break;
      default:
        break;
    }
  };

  const handleCreateTest = (isNew) => {
    setNewTestCase(isNew);
  };

  const handleInputFile = (type) => {
    switch (type) {
      case "input":
        setTestCases({
          ...testCases,
          inputFile: inputRef.current.files[0]
        });
        break;
      case "output":
        setTestCases({
          ...testCases,
          outputFile: outputRef.current.files[0]
        });
        break;
      default:
        break;
    };
  };

  const updateProblem = (params) => {
    const { requestUrl, body, method } = UPDATE_PROBLEM({
      id: problem.id,
      ...params
    });

    return makeRequest(url(requestUrl), body, method, accessToken);
  }

  const handleDifficultyChange = (newValue) => {
    setProblemDifficulty(newValue);
  };

  const handleUploadTestCases = () => {
    const uploadJob = () => {
      setTimeout(() => {
        if (!uploadTestCases.response && !uploadTestCases.isLoading) {
          uploadTestCases.fetchData();
          console.log("Started loading");
        } else if (uploadTestCases.response) {
          console.log(uploadTestCases.response);
          console.log("Loaded!")
        } else {
          uploadJob();
        }
      }, 500);
    };
    uploadJob();
  }

  const handleVisibilityChange = async () => {
    if (!problem.test_case) {
      alert(videoFailedVisibilityChange2);
      return;
    }

    try {
      const response = await updateProblem({
        visible: !problem.visible
      });
      if (responseHasErrors(response, problemVisibilityFailed)) return;

    } catch (e) {
      alert(genericError);
    }
  };

  const handleUpdate = async () => {
    const response = await updateProblem({
      name: problemName,
      descripion: problemDescription,
      difficulty: problemDifficulty
    });
    if (responseHasErrors(response, problemUpdateFailed)) return;
  }

  return (
    <Container>
      <ProblemInfo>
        <input type={"text"} value={problemName} onChange={(e) => handleChange(e, "problemName")} />
      </ProblemInfo>

      <DetailsButtonGroup>
        <button onClick={() => handleModalBehaviour("description")}>Description</button>
        <button onClick={() => handleModalBehaviour("testCases")}>Test cases</button>
      </DetailsButtonGroup>

      <Tooltip title="Difficulty">
        <StyledRating
          name="simple-controlled"
          value={problemDifficulty}
          precision={0.5}
          icon={<CircleIcon />}
          emptyIcon={<CircleOutlinedIcon />}
          onChange={(event, newValue) => {
            handleDifficultyChange(newValue);
          }}
        />
      </Tooltip>

      <ButtonGroup>
        {hasChanged && <button onClick={handleUpdate}><StyledSaveIcon /></button>}
        <button className={"delete"}><DeleteIcon /></button>
        <button onClick={handleVisibilityChange} className={"visibility"}>
          {problem.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </ButtonGroup>

      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={handleModalBehaviour}
      >
        {modalInfo === "description" && (
          <DescriptionModalComponent
            problemDescription={problemDescription.description}
            problemSampleInput={problemDescription.sample_input}
            problemSampleOutput={problemDescription.sample_output}
            handleChange={handleChange}
            handleModalBehaviour={handleModalBehaviour}
          />
        )}
        {modalInfo === "testCases" && (
          <TestCasesModalComponent
            handleCreateTest={handleCreateTest}
            newTestCase={newTestCase}
            handleUploadTestCases={handleUploadTestCases}
            inputRef={inputRef}
            outputRef={outputRef}
            handleInputFile={handleInputFile}
            problem={problem}
          />
        )}
      </Modal>
    </Container>
  )
};

export const mapStateToProps = (state: State) => {
  return ({
    accessToken: state.site.accessToken
  })
}

export default connect(mapStateToProps, null)(ProblemContent);
