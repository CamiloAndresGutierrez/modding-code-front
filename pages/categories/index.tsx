import React from "react";

import Base from "components/Base";
import Categories from "containers/categories";
import { NextPage } from "next";
import { Category } from "lib/types/categories";
import { Dispatch } from 'redux';

type DashboardTypes = {
  setCurrentCategory: (value: Category) => Dispatch,
  currentCategory: Category,
}

const DashboardPage: NextPage<DashboardTypes> = (props) => {
  return (
    <Base pageTitle={"Algorithm categories"} withNav>
      <Categories
        setCurrentCategory={props.setCurrentCategory}
      />
    </Base>
  )
}

export default DashboardPage;