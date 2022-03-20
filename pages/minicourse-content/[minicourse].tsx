import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';

import Base from 'components/Base';
import { fetchMinicourseById } from 'lib/client/minicourses';
import { fetchSections } from 'lib/client/videos';
import { fetchMinicourseProblems } from 'lib/client/problems';
import MinicourseContentContainer from 'containers/minicourse-content';

type Props = { 
  minicourse: string
};

type Ctx = {
  query: Props;
};

const MinicourseContent: NextPage<Props> = ({ minicourse }) => {
  const [ currentMinicourse, setCurrentMinicourse ] = useState({});
  const [ allSections, setAllSections ] = useState([]);
  const [ problems, setProblems ] = useState([]);

  useEffect(() => {
    fetchSections()
      .then(response => response.json())
      .then(r => setAllSections(r));

    fetchMinicourseById(minicourse)
      .then(response => response.json())
      .then(r => setCurrentMinicourse(r));

    fetchMinicourseProblems(minicourse)
      .then(response => response.json())
      .then(r => setProblems(r));


  }, []);

  return (
    <Base withNav>
      <MinicourseContentContainer
        minicourse={currentMinicourse}
        sections={allSections}
        problems={problems}
      />
    </Base>
  );
};

MinicourseContent.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

export default MinicourseContent;
