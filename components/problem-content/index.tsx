import React, { useState, useRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Modal from 'components/modal';
import {
  ButtonGroup,
  ButtonGroupModal,
  ButtonWithIcons,
  Container,
  DescriptionContainer,
  DetailsButtonGroup,
  Header,
  ProblemInfo,
  StyledTableHead,
  TableRow,
  TestCasesContainer
} from './problem-content.styled-components'

const ProblemContent = ({ problem }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [newTestCase, setNewTestCase] = useState(false);
  const [problemDescription, setProblemDescription] = useState(problem.description);
  const [inputFile, setInputFile] = useState(null);
  const [outputFile, setOutputFile] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLInputElement>(null);

  const handleModalBehaviour = (modalInfo = null) => {
    if (modalInfo) setModalInfo(modalInfo)
    setShouldShowModal(!shouldShowModal);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setProblemDescription(value);
  };

  const handleSaveNewDescription = () => {
    console.log(problemDescription);
  }

  const handleCreateTest = (isNew) => {
    setNewTestCase(isNew);
  }

  const handleInputFile = (type) => {
    switch (type) {
      case "input":
        setInputFile(inputRef.current.files[0]);
        break;
      case "output":
        setOutputFile(outputRef.current.files[0]);
        break;
      default:
        break;
    };
  };

  const handleUploadTestCases = () => {
    console.log(inputFile);
    console.log(outputFile);
  }

  return (
    <Container>
      <ProblemInfo>
        <div>{problem.id}</div>
        <div>{problem.name}</div>
      </ProblemInfo>
      <DetailsButtonGroup>
        <button onClick={() => handleModalBehaviour("description")}>Description</button>
        <button onClick={() => handleModalBehaviour("testCases")}>Test cases</button>
      </DetailsButtonGroup>
      <div>{problem.difficulty}</div>
      <ButtonGroup>
        <button><VisibilityIcon /></button>
        <button><DeleteIcon /></button>
      </ButtonGroup>

      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={handleModalBehaviour}
      >
        {modalInfo === "description" && (
          <DescriptionContainer>
            <h1>Description</h1>
            <textarea
              value={problemDescription}
              onChange={(event) => handleChange(event)}
            />
            <ButtonGroupModal>
              <button className={"cancel"} onClick={() => handleModalBehaviour()}>Cancel</button>
              <button className={"save"} onClick={() => handleSaveNewDescription()}>Save</button>
            </ButtonGroupModal>
          </DescriptionContainer>
        )}
        {modalInfo === "testCases" && (
          <TestCasesContainer>
            <Header>
              <h1>Test cases</h1>
              <button onClick={() => handleCreateTest(true)}>Create test</button>
            </Header>
            <div>

              <table>
                <StyledTableHead>
                  <tr>
                    <th>Input</th>
                    <th>Output</th>
                  </tr>
                </StyledTableHead>
                <tbody>
                  {
                    problem.testCases.map(testCase => (
                      <TableRow key={testCase}>
                        <td>{testCase.input}</td>
                        <td>{testCase.output}</td>
                        <td><ButtonWithIcons><DeleteIcon /></ButtonWithIcons></td>
                      </TableRow>
                    ))
                  }
                  {
                    newTestCase && (
                      <TableRow>
                        <th>
                          <input type={"file"} accept="text/plain" ref={inputRef} onChange={() => handleInputFile("input")} />
                        </th>
                        <th>
                          <input type={"file"} accept="text/plain" ref={outputRef} onChange={() => handleInputFile("output")} />
                        </th>
                        <th>
                          <ButtonWithIcons onClick={() => handleUploadTestCases()} ><SaveIcon /></ButtonWithIcons>
                        </th>
                        <th>
                          <ButtonWithIcons onClick={() => handleCreateTest(false)} ><DeleteIcon /></ButtonWithIcons>
                        </th>
                      </TableRow>
                    )
                  }
                </tbody>
              </table>
            </div>
          </TestCasesContainer>
        )}

      </Modal>

    </Container>
  )
};

export default ProblemContent;
