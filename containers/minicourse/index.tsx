import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from '@mui/material';
import { Rating } from '@mui/material'

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
  RateMinicourseButton,
  RatingContainer,
} from './minicourse.styled-components';
import { createSections } from 'lib/utils';
import Dialog from 'components/Dialog';
import { minicourseWithoutVideos } from 'lib/constants/errorMessages';
import Button from 'components/button';
import { ButtonGroup } from 'components/edit-minicourse/edit-minicourse.styled-components';

const MinicourseContainer = (props) => {
  const [sections, setSections] = useState<ISections[]>([]);
  const { minicourseVideos } = props;
  const { video, name, sectionName } = props.currentVideo;
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [problems, setProblems] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [rating, setRating] = useState(0);
  const { response } = useFetch(GET_PROBLEMS_BY_MINICOURSE(props.currentMinicourse.id));

  const handleModalBehaviour = (content = null) => {
    setShouldShowModal(!shouldShowModal);
    if (content) setModalContent(content)
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

  const fileteredSections = sections.filter(section => section.videos.length > 0);

  const handleRatingChange = (value) => {
    setRating(value);
  }

  return (
    <Container>
      {fileteredSections.length > 0 ?
        <>
          <div className="breadcrumbs">
            <a href='/categories'>
              {'Categories'}
            </a>
            {' > '}
            <a href={`/categories/${props.currentMinicourse.category_id}`}>
              {'Minicourses'}
            </a>
            {' > '}
            <a href={`/categories/${props.currentMinicourse.category_id}/${props.currentMinicourse.id}`}>
              {props.currentMinicourse.name}
            </a>
          </div>

          <Header>
            <LeftSide >
              <Title>
                {
                  sectionName && name && (
                    <div><span>{sectionName}</span>&nbsp;&bull;&nbsp;{name}</div>
                  )
                }
              </Title>
              <ButtonGroup>
                <Tooltip title={"Rate minicourse"}>
                  <RateMinicourseButton onClick={() => handleModalBehaviour("rate")}>
                    Rate
                  </RateMinicourseButton>
                </Tooltip>
                <Tooltip title={"Problems"}>
                  <ProblemsButton onClick={() => handleModalBehaviour("problems")}>
                    <StyledQuizIcon />
                    <ButtonText>Problems</ButtonText>
                  </ProblemsButton>
                </Tooltip>
              </ButtonGroup>
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
            {modalContent === "problems" ?
              <ProblemsList problems={problems} /> :
              <RatingContainer>
                <img src={'/images/girl-studying.png'}></img>
                <h2>How would you rate this minicourse?</h2>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  precision={0.5}
                  size={'large'}
                  onChange={(event, newValue) => {
                    handleRatingChange(newValue);
                  }}
                />
                <Button >Submit</Button>
              </RatingContainer>
            }
          </Modal>
        </> : <Dialog title={minicourseWithoutVideos} />
      }
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
