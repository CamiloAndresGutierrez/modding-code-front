import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import EditMinicourse from 'components/edit-minicourse';
import Jumbotron from 'components/jumbotron'
import Modal from 'components/modal';

import { ButtonContainer, ButtonGroup, Container, ExpertMinicourse, ExpertMinicoursesContainer, MinicourseName, NewMinicourse } from './my-minicourses.styled-components';
import content from './my-minicourses.content'

import { DELETE_MINICOURSE, GET_MINICOURSE_BY_USERNAME, GET_MINICOURSE_THUMB_UPLOAD_URL, UPDATE_MINICOURSE } from 'lib/client/minicourses';
import makeRequest, { makeFileUploadRequest } from 'lib/client';
import { url } from 'lib/constants';
import { Minicourse } from 'lib/types/minicourse';
import { deleteFailed, failedFetchingMinicourses, genericError, updateFailed } from 'lib/constants/errorMessages';
import { getParamsFromUrl, responseHasErrors } from 'lib/utils';

const MyMinicourses = ({ minicourses, categories, accessToken }) => {
  const { push } = useRouter();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [minicourse, setMinicourse] = useState({});
  const [allMinicourses, setAllMinicourses] = useState([]);
  const { title: { headline, text } } = content();

  useEffect(() => {
    if (minicourses.length > 0) {
      setAllMinicourses(minicourses)
    }
  }, [minicourses])

  const handleModalBehaviour = (minicourse) => {
    setShouldShowModal(!shouldShowModal);
    setMinicourse(minicourse);
  };

  const handleNewData = (minicourse) => {
    setMinicourse(minicourse);
  };

  const requestMinicourseThumbnailUrl = async (minicourseId: string) => {
    const { requestUrl, body, method } = GET_MINICOURSE_THUMB_UPLOAD_URL(minicourseId);

    return makeRequest(url(requestUrl), body, method, accessToken);
  }

  const handleSubmitInfo = async (info) => {
    if (info.thumbnail) {
      const response: Minicourse = await requestMinicourseThumbnailUrl(info.id);
      if (!responseHasErrors(response, genericError)) {
        const thumbnailURL = response.thumb_upload_url;
        const params = getParamsFromUrl(thumbnailURL);
        await makeFileUploadRequest(thumbnailURL, params, info.thumbnail);
      };
    };
    const { requestUrl, body, method } = UPDATE_MINICOURSE(info);
    const serverResponse = await makeRequest(url(requestUrl), body, method, accessToken);
    if (responseHasErrors(serverResponse, updateFailed)) return;
    handleNewData(serverResponse);
  }

  const handleModal = () => {
    setShouldShowModal(!shouldShowModal)
  }

  const updateMinicourses = async () => {
    const { requestUrl, body, method } = GET_MINICOURSE_BY_USERNAME;
    try {
      const minicoursesByUsername: any = await makeRequest(url(requestUrl), body, method, accessToken);
      if (responseHasErrors(minicoursesByUsername, updateFailed)) return;
      const { minicourses } = minicoursesByUsername;
      setAllMinicourses(minicourses);
    }
    catch (e) {
      alert(failedFetchingMinicourses);
    }
  }

  const changeVisibility = async (minicourse: Minicourse) => {
    const isVisible = minicourse.visible;
    const info = {
      id: minicourse.id,
      visible: !isVisible
    }
    try {
      const { requestUrl, body, method } = UPDATE_MINICOURSE(info);
      const response = await makeRequest(url(requestUrl), body, method, accessToken);
      if (responseHasErrors(response, updateFailed)) return;

      updateMinicourses();
    }
    catch (e) {
      alert(updateFailed);
    }
  }

  const deleteMinicourse = async (minicourse: Minicourse) => {
    try {
      const { requestUrl, body, method } = DELETE_MINICOURSE(minicourse.id);
      const response = await makeRequest(url(requestUrl), body, method, accessToken);
      if (responseHasErrors(response, updateFailed)) return;

      updateMinicourses();
    }
    catch (e) {
      alert(deleteFailed);
    }
  }

  const getNewRandomColor = () => {
    return "hsla(" + ~~(360 * Math.random()) + "," +
      "80%," +
      "80%, 1)"
  }

  const handleClickMinicourse = (minicourseId: string) => {
    push(`/minicourse-content/${minicourseId}`)
  }

  return (
    <Container>
      <Jumbotron
        headline={headline}
        text={text}
      >
        <ButtonContainer>
          <NewMinicourse onClick={() => push("/create-minicourse")}>New minicourse</NewMinicourse>
        </ButtonContainer>
      </Jumbotron>
      <ExpertMinicoursesContainer>
        {
          allMinicourses.map(minicourse =>
            <ExpertMinicourse
              key={minicourse.id}
              randomColorOne={() => getNewRandomColor()}
              randomColorTwo={() => getNewRandomColor()}
            >
              <MinicourseName
                onClick={() => handleClickMinicourse(minicourse.id)}
              >
                {minicourse.name}
              </MinicourseName>
              <ButtonGroup>
                <div className={"edit"} onClick={() => handleModalBehaviour(minicourse)}>
                  <EditIcon />
                </div>
                <div className={"visible"} onClick={() => changeVisibility(minicourse)}>
                  {
                    minicourse.visible ? <VisibilityIcon /> : <VisibilityOffIcon />
                  }
                </div>
                <div className={"delete"} onClick={() => deleteMinicourse(minicourse)}>
                  <DeleteIcon />
                </div>
              </ButtonGroup>
            </ExpertMinicourse>)
        }
      </ExpertMinicoursesContainer>
      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
      >
        <EditMinicourse
          minicourse={minicourse}
          categories={categories}
          submitInfo={handleSubmitInfo}
          cancelButtonBehavior={handleModal}
          isEdit
        />
      </Modal>
    </Container>
  )
};

export default MyMinicourses;
