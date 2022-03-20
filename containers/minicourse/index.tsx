import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Tooltip } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ConstructionIcon from '@mui/icons-material/Construction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Rating from '@mui/material/Rating';

import SectionsVideos from 'components/sectionsVideos';
import Modal from 'components/modal';
import { fetchMinicourseProblems } from 'lib/client/problems';
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
  Tools,
  ToolsContainer
} from './minicourse.styled-components';

import { StyledTable, StyledTableHead, Styledtd, StyledTableRow, TableContainer } from './problemsList.styled-components';
import { State } from 'lib/types/state';
import { Minicourse } from 'lib/types/minicourse';
import { connect } from 'react-redux';
import { ISections, Section, SectionContent, Video } from 'lib/types/videos';

const videoSections = [
  { slug: "CONTEXT", name: "Context" },
  { slug: "CODE", name: "Code" },
  { slug: "CODE_EXPLANATION", name: "Code explanation" }
];

const ProblemsList = ({ problems }) => {
  const { push } = useRouter();

  const handleProblemSelection = (problemId) => {
    push(`/problems/${problemId}`);
  }

  return (
    <TableContainer>
      <h2>Practice with some problems</h2>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Veredict</th>
          </tr>
        </StyledTableHead>
        <tbody>
          {
            problems.map(element =>
              <StyledTableRow key={element.id} onClick={() => handleProblemSelection(element.id)}>
                <Styledtd>{element.id}</Styledtd>
                <Styledtd>{element.name}</Styledtd>
                <Styledtd>
                  <Rating name="read-only" value={element.difficulty} readOnly precision={0.5} />
                </Styledtd>
                <Styledtd>{element.veredict}</Styledtd>
              </StyledTableRow>
            )
          }
        </tbody>
      </StyledTable>
    </TableContainer>
  )
};

const MinicourseContainer = (props) => {
  const [sections, setSections] = useState<ISections[]>([]);
  const { minicourseVideos } = props;
  const { video, name, sectionName } = props.currentVideo;
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [problems, setProblems] = useState(false);

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
    }))
  }

  useEffect(() => {
    if (minicourseVideos) {
      setSections(createSections(minicourseVideos));
    }
  }, [minicourseVideos]);

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
