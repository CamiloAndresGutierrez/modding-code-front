import React from 'react';
import { useRouter } from 'next/router';

import EditMinicourse from 'components/edit-minicourse';
import { Container } from './create-minicourse.styled-components';

const CreateMinicourseContainer = ({ categories }) => {
  const { push, back } = useRouter();
  
  const handleSubmit = (info) => {
    console.log(info);
    push(`minicourse-content/10`);
  };

  return (
    <Container>
      <EditMinicourse
        categories={categories}
        submitInfo={handleSubmit}
        cancelButtonBehavior={back}
      />
    </Container>
  )
}

export default CreateMinicourseContainer;
