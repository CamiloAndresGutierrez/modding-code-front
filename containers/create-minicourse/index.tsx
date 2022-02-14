import React from 'react';
import { useRouter } from 'next/router';

import EditMinicourse from 'components/edit-minicourse';

const CreateMinicourseContainer = ({ categories }) => {
  const { push } = useRouter();
  const handleSubmit = (info) => {
    console.log(info);
    push(`minicourse-content/10`);
  };

  return (
    <div>
      <EditMinicourse
        categories={categories}
        submitInfo={handleSubmit}
      />
    </div>
  )
}

export default CreateMinicourseContainer;
