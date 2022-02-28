import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import Base from "components/Base";
import Categories from "containers/categories";
import { NextPage } from "next";

type Props = {
  categories: []
};

const CategoryPage: NextPage<Props> = (props) => {
  const { categories } = props;
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    setFetchedData(categories);
  }, [categories]);

  return (
      <Base pageTitle={"Algorithm categories"} withNav>
          <Categories categories={fetchedData}/>
      </Base>
  )
}

const mapStateToProps = (state) => {
  return ({
    categories: state.categories.data
  })
}

export default connect(mapStateToProps, null)(CategoryPage);
