import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from '@mui/material';

import SectionsVideos from 'components/sectionsVideos';
import Modal from 'components/modal';
import ProblemsList from 'components/ProblemList';

import { State } from 'lib/types/state';
import { ISections } from 'lib/types/videos';
import { GET_PROBLEMS_BY_MINICOURSE } from 'lib/client/problems';

import { useFetch } from 'utils/hooks/useFetch';

import {
  Container,
  VideoContainer,
  Header,
  LeftSide,
  ProblemsButton,
  Title,
  StyledQuizIcon,
  ButtonText,
  PlayerContainer,
  SectionsContainer,
} from './minicourse.styled-components';

const videoSections = [
  { slug: "CONTEXT", name: "Context" },
  { slug: "CODE", name: "Code" },
  { slug: "CODE_EXPLANATION", name: "Code explanation" }
];

const MinicourseContainer = (props) => {
  const [sections, setSections] = useState<ISections[]>([]);
  const { minicourseVideos } = props;
  const { video, name, sectionName } = props.currentVideo;
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [problems, setProblems] = useState(false);
  const { response } = useFetch(GET_PROBLEMS_BY_MINICOURSE(props.currentMinicourse.id));

  const handleModalBehaviour = () => {
    setShouldShowModal(!shouldShowModal);
  };

  const videoRef = useRef<any>();
  const previousUrl = useRef<any>(video);

  useEffect(() => {
    if (previousUrl.current === video) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = video;
  }, [video]);

  const createSections = (minicourseVideos) => {
    return videoSections.map(videoSection => ({
      sectionName: videoSection.name,
      videos: minicourseVideos
        .filter(minicourseVideo => {
          const { section, visible } = minicourseVideo;
          return (section === videoSection.slug && visible) ? minicourseVideo : null;
        })
        .map(filteredVideos => {
          const { name, id, section, order } = filteredVideos;
          return (section === videoSection.slug) ? ({ name, id, order }) : null;
        })
        .sort((a, b) => {
          const aOrder = a.order;
          const bOrder = b.order;
          return (aOrder < bOrder) ? -1 : (aOrder > bOrder) ? 1 : 0;
        })
    }));
  };

  useEffect(() => {
    if (minicourseVideos) {
      setSections(createSections(minicourseVideos));
    }
  }, [minicourseVideos]);

  useEffect(() => {
    if (response) {
      const { problems } = response;
      setProblems(problems);
    }
  }, [response]);

  return (
    <Container>
      <Header>
        <LeftSide >
          <Title>
            {
              sectionName && name && (
                <div><span>{sectionName}</span>&nbsp;&bull;&nbsp;{name}</div>
              )
            }
          </Title>
          <Tooltip title={"Problems"}>
            <ProblemsButton onClick={() => handleModalBehaviour()}>
              <StyledQuizIcon />
              <ButtonText>Problems</ButtonText>
            </ProblemsButton>
          </Tooltip>
        </LeftSide>
      </Header>

      <PlayerContainer>
        {video && (
          <VideoContainer>
            <video ref={videoRef} controls>
              <source src={video} type="video/mp4"></source>
            </video>
          </VideoContainer >
        )}
        {sections &&
          <SectionsContainer>
            <SectionsVideos
              sections={sections}
            />
          </SectionsContainer>
        }
      </PlayerContainer>
      <Modal
        shouldShow={shouldShowModal}
        setShouldShow={handleModalBehaviour}
      >
        <ProblemsList problems={problems} />
      </Modal>
    </Container>
  )
};

const mapStateToProps = (state: State) => {
  return {
    currentMinicourse: state.minicourses.currentMinicourse,
    currentVideo: state.minicourses.currentVideo,
  }
}

export default connect(mapStateToProps, null)(MinicourseContainer);
