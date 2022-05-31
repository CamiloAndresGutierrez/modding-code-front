import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';

import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { CircularProgress, Tooltip } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import {
  Container,
  ProblemContext,
  ProblemName,
  ProblemDescription,
  CodeEditor,
  FlexContainer,
  ResultsContainer,
  ButtonGroup,
  TestCaseContainer,
  InfoButton,
  Veredict
} from './problem.styled-components';
import supportedLanguages from './supportedLanguages';

import BackButton from "components/back-button";
import Modal from "components/modal";
import FAQ from "components/faq";
import Dialog from "components/Dialog";

import { Evaluation, Problem } from "lib/types/problems";
import { State } from "lib/types/state";
import makeRequest from "lib/client";
import { EVALUATE_PROBLEM } from "lib/client/evaluation";
import { url } from "lib/constants";
import { isObjectEmpty, responseHasErrors } from "lib/utils";
import { genericError } from "lib/constants/errorMessages";
import { useFetch } from "utils/hooks/useFetch";

const questions = [
  {
    detail: 'This is question1',
    answer: 'This is the answer to question 1'
  }
];

type ProblemContainerProps = {
  problem: Problem;
}

const ProblemContainer = ({ problem }: ProblemContainerProps) => {
  const { accessToken } = useFetch({});
  const commentTemplate = "Write your code here, keep in mind to handle the data input...";
  const languages = supportedLanguages();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [problemEvaluation, setProblemEvaluation] = useState("");
  const [evaluationResult, setEvaluationResult] = useState([]);
  const [languageMirror, setLanguageMirror] = useState(javascript());
  const [comment, setComment] = useState(`// ${commentTemplate}`);
  const [code, setCode] = useState("");
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [description, setDescription] = useState({
    description: "",
    sample_input: "",
    sample_output: ""
  })

  const handleLanguageSelection = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    switch (language) {
      case "js":
        setLanguageMirror(javascript());
        setComment(`// ${commentTemplate}`)
        break;
      case "python":
        setLanguageMirror(python());
        setComment(`## ${commentTemplate}`)
        break;
      case "cpp":
        setLanguageMirror(cpp());
        setComment(`// ${commentTemplate}`)
        break;
      default:
        break;
    };
  };

  const handleCodeChange = (value) => {
    setCode(value);
  }

  const handleSubmit = async () => {
    try {
      setIsEvaluating(true);
      const { requestUrl, body, method } = EVALUATE_PROBLEM(problem.id, code, selectedLanguage);
      const response: Evaluation = await makeRequest(url(requestUrl), body, method, accessToken);
      if (responseHasErrors(response, genericError)) return;
      const { veredict, inputs_veredict } = response;
      setEvaluationResult(inputs_veredict);
      setProblemEvaluation(veredict);
      setIsEvaluating(false);
    } catch {
      alert(genericError);
    }
  }

  const handleModalBehaviour = () => {
    setShouldShowModal(!shouldShowModal);
  }

  useEffect(() => {
    if (!isObjectEmpty(problem)) {
      setDescription({ ...problem.description })
      setEvaluationResult(() =>
        (problem.test_case || []).map(
          testCase => ({
            id: testCase.id,
            veredict: null
          })
        )
      )
    }
  }, [problem]);

  const getVeredictIcon = (veredict) => {
    if (veredict === "SOLVED") {
      return <CheckIcon style={{ color: 'green' }} />
    }
    else if (veredict === "FAILED") {
      return <CloseIcon style={{ color: 'red' }} />
    }
  }

  return (
    <Container>
      {
        problem.test_case ?
          <>
            <ProblemName>
              <BackButton />
              {`${problem.name}`}
            </ProblemName>
            <FlexContainer>
              <ProblemContext>
                <ButtonGroup>
                  <Tooltip title={"Frequently asked questions"}>
                    <InfoButton onClick={handleModalBehaviour}>FAQ</InfoButton>
                  </Tooltip>
                  <Tooltip title={"Ask the expert"}>
                    <InfoButton>
                      <ContactSupportIcon />
                    </InfoButton>
                  </Tooltip>
                </ButtonGroup>
                <h2>Problem description:</h2>
                <ProblemDescription>
                  {description.description}
                </ProblemDescription>
                <h2>Sample input:</h2>
                <ProblemDescription>
                  {description.sample_input}
                </ProblemDescription>
                <h2>Sample output:</h2>
                <ProblemDescription>
                  {description.sample_output}
                </ProblemDescription>
              </ProblemContext>
              <CodeEditor>
                <ButtonGroup>
                  <Veredict>Veredict:
                    {
                      isEvaluating ? <CircularProgress /> : getVeredictIcon(problemEvaluation)
                    }</Veredict>
                  <button onClick={() => handleSubmit()}>
                    Submit
                  </button>
                  <select value={selectedLanguage} onChange={handleLanguageSelection}>
                    {
                      Object.keys(languages).map(language => {
                        let languageVals = languages[language];
                        return <option key={languageVals.value} value={languageVals.value}>{languageVals.label}</option>;
                      })
                    }
                  </select>
                </ButtonGroup>
                <CodeMirror
                  value={comment}
                  height={"350px"}
                  extensions={[languageMirror]}
                  onChange={handleCodeChange}
                  theme={"dark"}
                  indentWithTab
                />
                <ResultsContainer>
                  {
                    evaluationResult.map((element, index) =>
                      <TestCaseContainer key={element.id}>
                        Case {index + 1}
                        {
                          isEvaluating ? <CircularProgress /> : getVeredictIcon(element.veredict)
                        }
                      </TestCaseContainer>)
                  }
                </ResultsContainer>
              </CodeEditor>
            </FlexContainer>
            <Modal
              shouldShow={shouldShowModal}
              setShouldShow={handleModalBehaviour}
            >
              <FAQ questions={questions}></FAQ>
            </Modal>
          </> : <Dialog title="Looks like this is still a work in progress, please come back when it's ready." />
      }
    </Container>
  );
};

export const mapStateToProps = (state: State) => {
  return ({
    accessToken: state.site.accessToken
  })
}

export default connect(mapStateToProps, null)(ProblemContainer);
