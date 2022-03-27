import React, { useState } from 'react';
import { connect } from 'react-redux';

import ProblemContent from 'components/problem-content';
import CreateProblem from 'components/problem-content/create-problem';

import { Header, MinicourseName, Container, Body } from './problems-creation.styled-components';

import { State } from 'lib/types/state';

const ProblemsCreation = ({ problems, currentMinicourse }) => {
  const [isNewProblem, setIsNewProblem] = useState(false);

  const handleCreateProblem = () => {
    setIsNewProblem(!isNewProblem);
  }

  return (
    <Container>
      <Header>
        <MinicourseName>
          {currentMinicourse.name}
        </MinicourseName>
        <button onClick={() => handleCreateProblem()}>{isNewProblem ? "Cancel" : "Create problem"} </button>
      </Header>
      <hr />
      <Body>
        { isNewProblem && ( <CreateProblem />) }
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

const mapStateToProps = (state: State) => {
  return ({
    currentMinicourse: state.minicourses.currentMinicourse
  })
}

export default connect(mapStateToProps, null)(ProblemsCreation);
