import React, { useState } from 'react';
import ProblemContent from 'components/problem-content';
import CreateProblem from 'components/problem-content/create-problem';


const ProblemsCreation = ({ problems }) => {
  const [ isNewProblem, setIsNewProblem ] = useState(false);
  const handleCreateProblem = () => {
    setIsNewProblem(!isNewProblem);
  }

  return (
    <div>
      <button onClick={() => handleCreateProblem()}>{isNewProblem ? "Cancel" : "Create problem"} </button>
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
    </div>
  )
}

export default ProblemsCreation;
