import React, { useState, useEffect } from 'react';
import Base from 'components/Base';
import ProblemContainer from 'containers/problem';
import { GET_PROBLEMS_BY_ID } from 'lib/client/problems';
import { NextPage, NextPageContext } from 'next';
import { colors } from 'lib/constants';
import { useFetch } from 'utils/hooks/useFetch';

type Props = { 
  name: string
  problem: string
};

type Ctx = {
  query: Props;
};

const Problem: NextPage<Props> = (props: Props) => {
  const { problem } = props;
  const [ currentProblem, setCurrentProblem ] = useState({});
  const { response } = useFetch(GET_PROBLEMS_BY_ID(problem));

  useEffect(() => {
    if(response) {
      setCurrentProblem(response)
    }
  }, [response])

  return (
    <Base backgroundColor={colors.lighterBlack} withNav navHeight='50px'>
      <ProblemContainer problem={currentProblem} />
    </Base>
  );
};

Problem.getInitialProps = async (ctx: NextPageContext & Ctx) => {
  return Promise.resolve(ctx.query);
};

export default Problem;
