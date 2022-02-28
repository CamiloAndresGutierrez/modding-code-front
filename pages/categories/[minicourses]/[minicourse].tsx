import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';

import Base from 'components/Base';
import MinicourseContainer from 'containers/minicourse';
import { fetchMinicourseById } from "lib/client/minicourses";

type Props = {
  name: string
  minicourse: string
};

type Ctx = {
  query: Props;
};

const Minicourse: NextPage<Props> = (props: Props) => {
  const [minicourse, setMinicourse] = useState(null);
  const courseID = props.minicourse;

  useEffect(() => {
    fetchMinicourseById(courseID)
      .then(response => response.json())
      .then(r => setMinicourse(r));
  }, []);

  return (
    <Base pageTitle={minicourse && minicourse.name} withNav>
      <MinicourseContainer minicourse={minicourse}/>
    </Base>
  )
}

Minicourse.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

export default Minicourse;
