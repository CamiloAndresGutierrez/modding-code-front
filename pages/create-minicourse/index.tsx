import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import CreateMinicourseContainer from 'containers/create-minicourse';

import Base from 'components/Base';
import { useFetch } from 'utils/hooks/useFetch';
import { GET_ALL_CATEGORIES } from 'lib/client/categories';

const CreateMinicourse: NextPage = () => {
  const allCategories = useFetch(GET_ALL_CATEGORIES);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (allCategories.response) {
      const { categories } = allCategories.response;
      setCategories(categories);
    }
  }, [allCategories]);

  return (
    <Base pageTitle={"Create a minicourse"} withNav>
      <CreateMinicourseContainer categories={categories} />
    </Base>
  )
}

export default CreateMinicourse;
