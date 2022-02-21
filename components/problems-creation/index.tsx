import React, { useState } from 'react';
import ProblemContent from 'components/problem-content';
import CreateProblem from 'components/problem-content/create-problem';
import { Header, MinicourseName, Container, Body } from './problems-creation.styled-components';


const ProblemsCreation = ({ problems, currentMinicourseName }) => {
  const [isNewProblem, setIsNewProblem] = useState(false);
  const handleCreateProblem = () => {
    setIsNewProblem(!isNewProblem);
  }

  return (
    <Container>
      <Header>
        <MinicourseName>
          {currentMinicourseName}
        </MinicourseName>
        <button onClick={() => handleCreateProblem()}>{isNewProblem ? "Cancel" : "Create problem"} </button>
      </Header>
      <hr />
      <Body>

        {
          isNewProblem && (
            <CreateProblem />
          )
        }
        {
          problems.map(problem => (
            <ProblemContent
              key={problem.id}
              problem={problem}
            />
          ))
        }
      </Body>
    </Container>
  )
}

export default ProblemsCreation;
