import React, { useState, useEffect } from 'react';
import Base from 'components/Base';
import Navbar from 'components/navbar';
import ProblemContainer from 'containers/problem';
import { fetchMinicourseProblemById } from 'lib/client/problems';

type Props = { name: string };

type Ctx = {
  query: Props;
};

const Problem: NextPage<Props> = (props: Props) => {
  const { problem } = props;
  const [ currentProblem, setCurrentProblem ] = useState({})

  useEffect(() => {
    fetchMinicourseProblemById(problem)
      .then(response => response.json())
      .then(data => setCurrentProblem(data));
  }, []);

  return (
    <Base>
      <Navbar></Navbar>
      <ProblemContainer problem={currentProblem} />
    </Base>
  );
};

Problem.getInitialProps = async (ctx: NextPageContext & Ctx) => {
  return Promise.resolve(ctx.query);
};

// Problem.getInitialProps = async (ctx: NextPageContext & Ctx) => {
//     const { problem } = Promise.resolve(ctx.query);
//     const response = await fetchMinicourseProblemById(problem);
//     const minicourseProblem = await response.json();
//
//     return ({
//       problem: minicourseProblem
//     })
// };


export default Problem;
