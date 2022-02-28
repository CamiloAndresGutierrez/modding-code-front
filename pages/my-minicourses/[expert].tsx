import React, { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';

import Base from 'components/Base';
import MyMinicourses from 'containers/my-minicourses';
import { fetchExpertMinicourses } from 'lib/client/minicourses';
import { Category } from 'lib/types';

type Props = {
  name: string
  expert: string,
  categories: Category[]
};

type Ctx = {
  query: Props;
};

const Expert: NextPage <Props> = ({ expert, categories }: Props) => {
  const [ expertMinicourses, setExpertMinicourses ] = useState([]);

  useEffect(() => {
    fetchExpertMinicourses(expert)
      .then(response => response.json())
      .then(data => setExpertMinicourses(data));
  }, []);

  return (
    <Base withNav>
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
