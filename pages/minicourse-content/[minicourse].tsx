import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';

import Base from 'components/Base';

import MinicourseContentContainer from 'containers/minicourse-content';

// import { fetchMinicourseProblems } from 'lib/client/problems';
import { GET_MINICOURSE_BY_ID } from 'lib/client/minicourses';
import { useFetch } from 'utils/hooks/useFetch';
import { GET_VIDEOS_BY_MINICOURSE_ID } from 'lib/client/videos';

type Props = {
  minicourse: string
};

type Ctx = {
  query: Props;
};

const MinicourseContent: NextPage<Props> = ({ minicourse }) => {
  const videosById = useFetch(GET_VIDEOS_BY_MINICOURSE_ID(minicourse));
  const minicourseById = useFetch(GET_MINICOURSE_BY_ID(minicourse));
  const [currentMinicourse, setCurrentMinicourse] = useState({});
  const [currentMinicourseSections, setCurrentMinicourseSections] = useState([]);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    if (videosById.response && !videosById.hasErrors) {
      const { videos } = videosById.response;
      setCurrentMinicourseSections(videos);
    }
  }, [videosById]);

  useEffect(() => {
    if (minicourseById.response && !minicourseById.hasErrors) {
      setCurrentMinicourse(minicourseById.response.minicourse);
    };
  }, [minicourseById]);

  return (
    <Base withNav>
      <MinicourseContentContainer
        minicourse={currentMinicourse}
        sections={currentMinicourseSections}
        problems={problems}
      />
    </Base>
  );
};

MinicourseContent.getInitialProps = (ctx: NextPageContext & Ctx) => {
  return Promise.resolve(ctx.query);
};

export default MinicourseContent;
