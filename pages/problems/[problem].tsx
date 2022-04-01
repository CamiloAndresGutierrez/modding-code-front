import React, { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Base from 'components/Base';

import ProblemContainer from 'containers/problem';

import { GET_PROBLEMS_BY_ID } from 'lib/client/problems';
import { colors } from 'lib/constants';
import { Problem as ProblemType} from 'lib/types/problems';
import { setAccessToken } from 'lib/actions/site';

import { useFetch } from 'utils/hooks/useFetch';

type Props = { 
  name: string
  problem: string
  setAccessToken?: (value: any) => any
};

type Ctx = {
  query: Props;
};

const Problem: NextPage<Props> = (props: Props) => {
  const { problem } = props;
  const [ currentProblem, setCurrentProblem ] = useState<ProblemType>({});
  const { response, accessToken } = useFetch(GET_PROBLEMS_BY_ID(problem));

  useEffect(() => {
    if(response) {
      setCurrentProblem(response)
    }
  }, [response])

  useEffect(() => {
    if (accessToken) setAccessToken(accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <Base backgroundColor={colors.lighterBlack} withNav navHeight='50px'>
      <ProblemContainer problem={currentProblem} />
    </Base>
  );
};

Problem.getInitialProps = async (ctx: NextPageContext & Ctx) => {
  return Promise.resolve(ctx.query);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    setAccessToken: (accessToken: string) => dispatch(setAccessToken(accessToken)),
  })
}

export default connect(null, mapDispatchToProps)(Problem);
