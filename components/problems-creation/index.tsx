import React, { useState } from 'react';
import { connect } from 'react-redux';

import ProblemContent from 'components/problem-content';
import CreateProblem from 'components/problem-content/create-problem';

import { Header, MinicourseName, Container, Body } from './problems-creation.styled-components';

import { State } from 'lib/types/state';
import { GET_PROBLEMS_BY_MINICOURSE } from 'lib/client/problems';
import makeRequest from 'lib/client';
import { url } from 'lib/constants';
import { genericError, problemsList } from 'lib/constants/errorMessages';
import { responseHasErrors } from 'lib/utils';

const ProblemsCreation = ({ problems, currentMinicourse, accesToken }) => {
  const [isNewProblem, setIsNewProblem] = useState(false);
  const [minicourseProblems, setMinicourseProblems] = useState([...problems]);

  const handleCreateProblem = () => {
    setIsNewProblem(!isNewProblem);
  };

  const handleNewProblemCreated = async () => {
    const { requestUrl, body, method } = GET_PROBLEMS_BY_MINICOURSE(currentMinicourse.id);
    try {
      const response = await makeRequest(url(requestUrl), body, method, accesToken);
      if (responseHasErrors(response, problemsList)) return;

      setMinicourseProblems(response.problems);
    } catch (e) {
      alert(genericError);
    };
  }

  return (
    <Container>
      <Header>
        <MinicourseName>
          {currentMinicourse.name}
        </MinicourseName>
        <button onClick={() => handleCreateProblem()}>{isNewProblem ? "Cancel" : "New problem"} </button>
      </Header>
      <hr />
      <Body>
        {isNewProblem && (<CreateProblem handleNewProblemCreated={handleNewProblemCreated} />)}
        {
          minicourseProblems.map(problem => (
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
    currentMinicourse: state.minicourses.currentMinicourse,
    accesToken: state.site.accessToken,
  })
}

export default connect(mapStateToProps, null)(ProblemsCreation);
