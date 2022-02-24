import React, { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import {
  Container,
  ProblemContext,
  ProblemName,
  ProblemDescription,
  CodeEditor,
  FlexContainer,
  ResultsContainer,
  ButtonGroup,
  TestCaseContainer
} from './problem.styled-components';
import supportedLanguages from './supportedLanguages';
import { Tooltip } from "@mui/material";
import BackButton from "components/back-button";

const TestCase = ({testCase}) => {
  return (
    <TestCaseContainer>
      {testCase.name}
    </TestCaseContainer>
  )

}

const ProblemContainer = ({ problem }) => {
  const testCases = [
    {"name": "Test case 1"},
    {"name": "Test case 2"},
    {"name": "Test case 3"},
    {"name": "Test case 4"},
    {"name": "Test case 5"},
    {"name": "Test case 6"},
    {"name": "Test case 7"},
  ]
  const commentTemplate = "Write your code here...";
  const languages = supportedLanguages();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [languageMirror, setLanguageMirror] = useState(javascript());
  const [comment, setComment] = useState(`// ${commentTemplate}`);
  const [code, setCode] = useState("");

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

  const handleSubmit = () => {
    console.log(code);
  }

  return (
    <Container>
      <ProblemName>
        <BackButton />
        {`${problem.id} - ${problem.name}`}
      </ProblemName>
      <FlexContainer>
        <ProblemContext>
          <ButtonGroup>
            <Tooltip title={"Frequently asked questions"}>
              <div>FAQ</div>
            </Tooltip>
            <Tooltip title={"Ask the expert"}>
              <div>
                <ContactSupportIcon />
              </div>
            </Tooltip>
          </ButtonGroup>
          <h2>Problem description:</h2>
          <ProblemDescription>
            {problem.description}
          </ProblemDescription>
        </ProblemContext>
        <CodeEditor>
          <ButtonGroup>
            <button onClick={() => handleSubmit()}>
              Submit
            </button>
            <select value={selectedLanguage} onChange={handleLanguageSelection}>
              {
                Object.keys(languages).map(language => <option key={language} value={language}>{languages[language]}</option>)
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
              testCases.map(element => <TestCase key={element.name} testCase={element} />)
            }
          </ResultsContainer>
        </CodeEditor>
      </FlexContainer>
    </Container>
  );
};

export default ProblemContainer;
