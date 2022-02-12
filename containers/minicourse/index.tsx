import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  VideoContainer
} from './minicourse.styled-components';
import { useRouter } from 'next/router';
import SectionsVideos from 'components/sectionsVideos';
import Modal from 'components/modal';
import ProblemList from 'components/problemsList'
import { fetchMinicourseProblems } from 'lib/client/minicourses'

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

  const handleCloseButton = () => {
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
    fetchMinicourseProblems(minicourse.id)
      .then(response => response.json())
      .then(r => setProblems(r));
  }, [])

  useEffect(() => {
    setSections(minicourse && minicourse.sections);
  }, [minicourse]);

  return (
    <Container>
      {`${sectionName} - ${name}`}
      <button onClick={() => handleCloseButton()}>Problems</button>
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
        setShouldShow={setShouldShowModal}
      >
        <ProblemList problems={problems}/>
      </Modal>
    </Container>
  )
}

export default MinicourseContainer;
