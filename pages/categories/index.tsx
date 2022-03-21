import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import Base from "components/Base";

import Categories from "containers/categories";

import { GET_ALL_CATEGORIES } from "lib/client/categories";

import { useFetch } from "utils/hooks/useFetch";

const DashboardPage: NextPage = () => {
  const { response } = useFetch(GET_ALL_CATEGORIES);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (response) {
      const { categories } = response;
      setCategories(categories);
    }
  }, [response])

  return (
    <Base pageTitle={"Algorithm categories"} withNav>
      <Categories
        categories={categories}
      />
    </Base>
  )
}

export default DashboardPage;