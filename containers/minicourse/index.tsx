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
                  <Rating name="read-only" value={element.difficulty} readOnly precision={0.5}/>
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
  const [sections, setSections] = useState([]);
  const [currentVideoInfo, setCurrentVideoInfo] = useState({
    video: '',
    name: '',
    sectionName: '',
  });
  const { minicourse } = props;
  const { video, name, sectionName } = currentVideoInfo;
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
            <ToolsContainer>
              <Tools>
                <div className={'text'}>
                  Check class material
                </div>
                <div className={'icon material'}>
                  <MenuBookIcon />
                </div>
              </Tools>
              <Tools>
                <div className={'text'}>
                  Check class tools
                </div>
                <div className={'icon tools'}>
                  <ConstructionIcon />
                </div>
              </Tools>
              <Tools>
                <div className={'text'}>
                  Ask questions to the expert
                </div>
                <div className={'icon expert'}>
                  <QuestionMarkIcon />
                </div>
              </Tools>
            </ToolsContainer>
          </VideoContainer >
        )}
        {sections &&
          <SectionsContainer>
            <SectionsVideos
              sections={sections}
              currentVideo={setCurrentVideoInfo}
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
}

export default MinicourseContainer;
