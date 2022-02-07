import React, { useEffect, useState } from "react";
import Base from '../../components/Base';
import Navbar from "../../components/navbar";
import Categories from "../../containers/categories";
import { connect } from 'react-redux';

const CategoryPage = (props) => {
  const { categories } = props;
  const [fetchedData, setFetchedData] = useState([]);
  
  useEffect(() => {
    setFetchedData(categories);
  }, [categories]);

  return (
      <Base
          pageTitle={"Algorithm categories"}
      >
          <Navbar />
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
