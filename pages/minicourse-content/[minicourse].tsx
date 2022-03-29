import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';

import Base from 'components/Base';

import MinicourseContentContainer from 'containers/minicourse-content';

// import { fetchMinicourseProblems } from 'lib/client/problems';
import { GET_MINICOURSE_BY_ID } from 'lib/client/minicourses';
import { useFetch } from 'utils/hooks/useFetch';
import { GET_VIDEOS_BY_MINICOURSE_ID } from 'lib/client/videos';
import { connect } from 'react-redux';
import { State } from 'lib/types/state';
import { setCurrentMinicourse } from 'lib/actions/minicourses';
import { Minicourse } from 'lib/types/minicourse';
import makeRequest from 'lib/client';
import { url } from 'lib/constants';
import { setAccessToken } from 'lib/actions/site';
import { Dispatch } from 'redux';
import { GET_PROBLEMS_BY_MINICOURSE } from 'lib/client/problems';
import { genericError } from 'lib/constants/errorMessages';
import { responseHasErrors } from 'lib/utils';

type Props = {
  minicourse: string,
  setCurrentMinicourse?: (value: any) => any
  setAccessToken?: (value: any) => any
};

type Ctx = {
  query: Props;
};

const MinicourseContent: NextPage<Props> = ({ minicourse, setCurrentMinicourse, setAccessToken }) => {
  const { accessToken } = useFetch({});
  const [currentMinicourseSections, setCurrentMinicourseSections] = useState([]);
  const [problems, setProblems] = useState([]);

  const getResponse = async (action) => {
    const { requestUrl, method, body } = action(minicourse);
    const response = await makeRequest(url(requestUrl), body, method, accessToken);
    if (responseHasErrors(response, genericError)) return [];

    return response;
  };

  const setResponses = async () => {
    const minicourseVidResponse = await getResponse(GET_VIDEOS_BY_MINICOURSE_ID);
    setCurrentMinicourseSections(minicourseVidResponse.videos);

    const minicourseResponse = await getResponse(GET_MINICOURSE_BY_ID);
    setCurrentMinicourse(minicourseResponse.minicourse);

    const minicourseProbResponse = await getResponse(GET_PROBLEMS_BY_MINICOURSE);
    setProblems(minicourseProbResponse.problems);
  };

  useEffect(() => {
    setResponses();
  }, []);

  useEffect(() => {
    if (accessToken) setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <Base withNav>
      <MinicourseContentContainer
        sections={currentMinicourseSections}
        problems={problems}
      />
    </Base>
  );
};

MinicourseContent.getInitialProps = (ctx: NextPageContext & Ctx) => {
  return Promise.resolve(ctx.query);
};

const mapStateToProps = (state: State) => {
  return ({
    currentMinicourse: state.minicourses.currentMinicourse,
  })
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    setCurrentMinicourse: (minicourse: Minicourse) => dispatch(setCurrentMinicourse(minicourse)),
    setAccessToken: (accessToken: string) => dispatch(setAccessToken(accessToken)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MinicourseContent);
