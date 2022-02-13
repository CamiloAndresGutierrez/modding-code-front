import React, { useEffect, useState, useRef } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';

import {
  Container
} from './problem.styled-components';
import supportedLanguages from './supportedLanguages';

const ProblemContainer = ({ problem }) => {
  const commentTemplate = "Write your code here...";
  const languages = supportedLanguages();
  const [ selectedLanguage, setSelectedLanguage ] = useState("");
  const [ languageMirror, setLanguageMirror ] = useState(javascript());
  const [ comment, setComment ] = useState(`// ${commentTemplate}`);
  const [ code, setCode ] = useState("");
  const [ testCasesState, setTestCasesState ] = useState({

  });

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
      <div>
        <div>{ problem.description }</div>
        <select value={selectedLanguage} onChange={handleLanguageSelection}>
          {
            Object.keys(languages).map(language => <option key={language} value={language}>{languages[language]}</option>)
          }
        </select>
        <button onClick={() => handleSubmit()}>
          Submit
        </button>
        <div>
          <CodeMirror
            value={comment}
            height="200px"
            extensions={[languageMirror]}
            onChange={handleCodeChange}
          />
        </div>
        <div className={"test-cases"}></div>
      </div>
    </Container>
  );
};

export default ProblemContainer;
