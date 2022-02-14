import React, { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';

import Base from 'components/Base';
import Navbar from 'components/navbar';
import MyMinicourses from 'containers/my-minicourses';
import { fetchExpertMinicourses } from 'lib/client/minicourses';

type Props = { name: string };

type Ctx = {
  query: Props;
};

const Expert: NextPage = ({ expert, categories }) => {
  const [ expertMinicourses, setExpertMinicourses ] = useState([]);

  useEffect(() => {
    fetchExpertMinicourses(expert)
      .then(response => response.json())
      .then(data => setExpertMinicourses(data));
  }, []);

  return (
    <Base>
      <Navbar></Navbar>
      <MyMinicourses
        minicourses={expertMinicourses}
        categories={categories}
      />
    </Base>
  );
};

Expert.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

const mapStateToProps = (state) => {
  return ({
    categories: state.categories.data
  })
}

export default connect(mapStateToProps, null)(Expert);
