import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import EditMinicourse from 'components/edit-minicourse';
import Jumbotron from 'components/jumbotron'
import { ButtonContainer, ButtonGroup, Container, ExpertMinicourse, ExpertMinicoursesContainer, MinicourseName, NewMinicourse } from './my-minicourses.styled-components';
import content from './my-minicourses.content'
import Modal from 'components/modal';
import { UPDATE_MINICOURSE } from 'lib/client/minicourses';
import makeRequest from 'lib/client';
import { url } from 'lib/constants';

const MyMinicourses = ({ minicourses, categories, accessToken }) => {
  const { push } = useRouter();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [fetchedMinicourses, setFetchedMinicourses] = useState([]);
  const [minicourse, setMinicourse] = useState({});
  const { title: { headline, text } } = content();

  const handleModalBehaviour = (minicourse) => {
    setShouldShowModal(!shouldShowModal);
    setMinicourse(minicourse);
  };

  const handleNewData = (minicourse) => {
    setMinicourse(minicourse);
  };

  const handleSubmitInfo = async (info) => {
    const { requestUrl, body, method } = UPDATE_MINICOURSE(info)
    const serverResponse = await makeRequest(url(requestUrl), body, method, accessToken);
    handleNewData(serverResponse);
  }

  const handleModal = () => {
    setShouldShowModal(!shouldShowModal)
  }

  const getNewRandomColor = () => {
    return "hsla(" + ~~(360 * Math.random()) + "," +
      "80%," +
      "80%, 1)"
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
          minicourses.map(minicourse =>
            <ExpertMinicourse
              key={minicourse.id}
              randomColorOne={() => getNewRandomColor()}
              randomColorTwo={() => getNewRandomColor()}
            >
              <MinicourseName>
                {minicourse.name}
              </MinicourseName>
              <ButtonGroup>
                <div className={"edit"} onClick={() => handleModalBehaviour(minicourse)}>
                  <EditIcon />
                </div>
                <div className={"visible"}>
                  <VisibilityIcon />
                </div>
                <div className={"delete"}>
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
        />
      </Modal>
    </Container>
  )
};

export default MyMinicourses;
