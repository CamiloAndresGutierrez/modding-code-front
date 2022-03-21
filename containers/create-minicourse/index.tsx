import React from 'react';
import { useRouter } from 'next/router';

import EditMinicourse from 'components/edit-minicourse';

import { Container } from './create-minicourse.styled-components';

import { CREATE_MINICOURSE } from 'lib/client/minicourses';
import makeRequest, { makeFileUploadRequest } from 'lib/client';
import { url } from 'lib/constants';
import { Minicourse } from 'lib/types/minicourse';
import { getParamsFromUrl } from 'lib/utils';

import { useFetch } from 'utils/hooks/useFetch';

const CreateMinicourseContainer = ({ categories }) => {
  const { accessToken } = useFetch({});
  const { push, back } = useRouter();

  const createMinicourseRequest = async ({ name, category }) => {
    const { requestUrl, body, method } = CREATE_MINICOURSE({
      "name": name,
      "category_id": category
    });

    return await makeRequest(url(requestUrl), body, method, accessToken);
  }

  const handleSubmit = async (details) => {
    const response: Minicourse = await createMinicourseRequest(details);
    const thumbnailURL = response.thumb_upload_url;
    const params = getParamsFromUrl(thumbnailURL);
    // makeFileUploadRequest(thumbnailURL, params, details.thumbnail);

    push(`minicourse-content/${response.id}`);
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
