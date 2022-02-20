import React, { useState, useRef } from 'react';

import Modal from 'components/modal';
import { Container } from './problem-content.styled-components'

const ProblemContent = ({ problem }) => {
  const [ shouldShowModal, setShouldShowModal ] = useState(false);
  const [ modalInfo, setModalInfo] = useState("");
  const [ newTestCase, setNewTestCase] = useState(false);
  const [ problemDescription, setProblemDescription ] = useState(problem.description);
  const [ inputFile, setInputFile ] = useState(null);
  const [ outputFile, setOutputFile ] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLInputElement>(null);

  const handleModalBehaviour = (modalInfo = null) => {
    if(modalInfo) setModalInfo(modalInfo)
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
      <div>{`ID: ${problem.id}`}</div>

      <div>{`Name: ${problem.name}`}</div>

      <button onClick={() => handleModalBehaviour("description")}>Description</button>
      <button onClick={() => handleModalBehaviour("testCases")}>TestCases</button>
      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={handleModalBehaviour}
      >
        {modalInfo === "description" && (
          <div>
            <textarea
              value={problemDescription}
              onChange={(event) => handleChange(event)}
            />
            <button onClick={() => handleModalBehaviour()}>Cancel</button>
            <button onClick={() => handleSaveNewDescription()}>Save</button>
          </div>
        )}
        {modalInfo === "testCases" && (
          <div>
            <button onClick={() => handleCreateTest(true)}>Create test</button>
            {
              problem.testCases.map(testCase => (
                <div key={testCase.id}>
                  <div>{testCase.input}</div>
                  <div>{testCase.output}</div>
                  <button>Delete</button>
                </div>
              ))
            }
            {
              newTestCase && (
                <div>
                  <input type={"file"} accept="text/plain" ref={inputRef} onChange={() => handleInputFile("input")}/>
                  <input type={"file"} accept="text/plain" ref={outputRef} onChange={() => handleInputFile("output")}/>
                  <button onClick={() => handleUploadTestCases()} >Save</button>
                  <button onClick={() => handleCreateTest(false)} >Delete</button>
                </div>
              )
            }
          </div>
        )}

      </Modal>
      <div>{`difficulty: ${problem.difficulty}`}</div>
      <button>Hide</button>
      <button>Delete</button>

    </Container>
  )
};

export default ProblemContent;
