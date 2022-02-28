import React from 'react';
import Base from 'components/Base';
import CreateMinicourseContainer from 'containers/create-minicourse';
import { connect } from 'react-redux';

const CreateMinicourse = ({ categories }) => {
  return (
    <Base pageTitle={"Create a minicourse"} withNav>
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
