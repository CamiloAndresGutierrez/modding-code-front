import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

import Base from 'components/Base';

import MyMinicourses from 'containers/my-minicourses';

import { useFetch } from 'utils/hooks/useFetch';

import { GET_MINICOURSE_BY_USERNAME } from 'lib/client/minicourses';
import { GET_ALL_CATEGORIES } from 'lib/client/categories';

const Expert: NextPage = () => {
  const minicoursesByUsername = useFetch(GET_MINICOURSE_BY_USERNAME);
  const allCategories = useFetch(GET_ALL_CATEGORIES);
  const [expertMinicourses, setExpertMinicourses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (minicoursesByUsername.response) {
      const { minicourses } = minicoursesByUsername.response;
      setExpertMinicourses(minicourses);
    }
  }, [minicoursesByUsername]);

  useEffect(() => {
    if (allCategories.response) {
      const { categories } = allCategories.response;
      setCategories(categories);
    }
  }, [allCategories])

  return (
    <Base withNav>
      <MyMinicourses
        minicourses={expertMinicourses}
        categories={categories}
        accessToken={minicoursesByUsername.accessToken}
      />
    </Base>
  );
};

export default Expert;
