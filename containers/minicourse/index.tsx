import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  VideoContainer
} from './minicourse.styled-components';
import { useRouter } from 'next/router';
import SectionsVideos from 'components/sectionsVideos';
import Modal from 'components/modal';
import { fetchMinicourseProblems } from 'lib/client/problems';

const ProblemsList = ({problems}) => {
  const { push } = useRouter();

  const handleProblemSelection = (problemId) => {
    push(`/problems/${problemId}`);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Veredict</th>
        </tr>
      </thead>
      <tbody>
      {
        problems.map(element =>
            <tr key={element.id} onClick={() => handleProblemSelection(element.id)}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.difficulty}</td>
              <td>{element.veredict}</td>
            </tr>
        )
      }
      </tbody>
    </table>
  )
};


const MinicourseContainer = (props) => {
  const [ sections, setSections ] = useState([]);
  const [ currentVideoInfo, setCurrentVideoInfo ] = useState({
    video: '',
    name: '',
    sectionName: '',
  });
  const [ firstSection, setFirstSection ] = useState({})
  const { minicourse } = props;
  const { video, name, sectionName} = currentVideoInfo;
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [problems, setProblems] = useState(false);

  const handleModalBehaviour = () => {
    setShouldShowModal(!shouldShowModal);
  }

  const videoRef = useRef();
  const previousUrl = useRef(video);

  useEffect(() => {
    if (previousUrl.current === video) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = video;
  }, [video]);

  useEffect(() => {
    setSections(minicourse && minicourse.sections);
    if (minicourse) {
      fetchMinicourseProblems(minicourse.id)
      .then(response => response.json())
      .then(r => setProblems(r));
    }
  }, [minicourse]);

  return (
    <Container>
      {`${sectionName} - ${name}`}
      <button onClick={() => handleModalBehaviour()}>Problems</button>
      { video && (
        <VideoContainer>
          <video width={"%100"} height={"auto"} ref={videoRef} controls>
          <source src={video} type="video/mp4"></source>
          </video>
        </VideoContainer >
      )}
      { sections &&
        (<SectionsVideos
            sections={sections}
            currentVideo={setCurrentVideoInfo}
        />)
      }
      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={handleModalBehaviour}
      >
        <ProblemsList problems={problems}/>
      </Modal>
    </Container>
  )
}

export default MinicourseContainer;
