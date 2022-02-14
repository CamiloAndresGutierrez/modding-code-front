import React, { useState } from 'react';
import { useRouter } from 'next/router';

import EditMinicourse from 'components/edit-minicourse';
import Jumbotron from 'components/jumbotron'
import { Container } from './my-minicourses.styled-components.tsx';
import content from './my-minicourses.content.ts'
import Modal from 'components/modal';

const MyMinicourses = ({ minicourses, categories }) => {
  const { push } = useRouter();
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [minicourse, setMinicourse] = useState({});
  const { title: {headline, text} } = content();
  const handleModalBehaviour = (minicourse) => {
    setShouldShowModal(!shouldShowModal);
    setMinicourse(minicourse);
  };

  const handleSubmitInfo = (info) => {
    console.log(info);
  }

  return (
    <Container>
      <Jumbotron
        headline={headline}
        text={text}
      >
        <button onClick={() => push("/create-minicourse") }>New minicourse</button>
      </Jumbotron>
      {
        minicourses.map(minicourse =>
          <div key={minicourse.id}>
            {minicourse.name}
            <button onClick={() => handleModalBehaviour(minicourse)}>Edit</button>
            <button>Hide</button>
            <button>Delete</button>
          </div>)
      }
      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={setShouldShowModal}
      >
        <EditMinicourse
          minicourse={minicourse}
          categories={categories}
          submitInfo={handleSubmitInfo}
        />
      </Modal>
    </Container>
  )
};

export default MyMinicourses;
