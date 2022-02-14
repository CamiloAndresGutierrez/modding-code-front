import React from 'react';
import Base from 'components/Base';
import Navbar from 'components/navbar';
import CreateMinicourseContainer from 'containers/create-minicourse';
import { connect } from 'react-redux';

const CreateMinicourse = ({ categories }) => {
  return (
    <Base pageTitle={"Create a minicourse"}>
      <Navbar></Navbar>
      <CreateMinicourseContainer categories={categories} />
    </Base>
  )
}

const mapStateToProps = (state) => {
  return ({
    categories: state.categories.data
  })
}

export default connect(mapStateToProps, null)(CreateMinicourse);
