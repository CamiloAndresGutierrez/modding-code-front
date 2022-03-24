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

  const getMinicourseVideosRequest = () => {
    const { requestUrl, method, body } = GET_VIDEOS_BY_MINICOURSE_ID(minicourse);
    return makeRequest(url(requestUrl), body, method, accessToken);
  }

  const getMinicourseRequest = () => {
    const { requestUrl, method, body } = GET_MINICOURSE_BY_ID(minicourse);
    return makeRequest(url(requestUrl), body, method, accessToken);
  }

  useEffect(() => {
    getMinicourseVideosRequest()
      .then(response => {
        const { videos } = response;
        setCurrentMinicourseSections(videos);
      });

    getMinicourseRequest()
      .then(response => {
        const { minicourse } = response;
        setCurrentMinicourse(minicourse)
      });

    setAccessToken(accessToken);
  }, []);

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
