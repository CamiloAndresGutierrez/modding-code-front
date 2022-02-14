import React from 'react';
import ProblemContent from 'components/problem-content';
import CreateProblem from 'components/problem-content/create-problem';


const ProblemsCreation = ({ problems }) => {
  return (
    <div>
      <CreateProblem />
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
