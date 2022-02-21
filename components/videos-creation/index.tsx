import React, { useState } from 'react';

import SectionContent from 'components/section-content';
import VideosConfig from 'components/section-content/videosConfig';
import { Body, Container, Header, MinicourseName } from './videos-creation.styled-components';

const VideoCreation = ({ allSections, minicourseSections, currentMinicourseName }) => {
  const [isNewVideo, setIsNewVideo] = useState(false);

  const handleNewVideo = (flag) => {
    setIsNewVideo(flag);
  };

  return (
    <Container>
      <Header>
        <MinicourseName>
          {currentMinicourseName}
        </MinicourseName>
        <button
          disabled={isNewVideo}
          onClick={() => handleNewVideo(true)}
        >
          Upload video
        </button>
      </Header>
      <hr />
      <Body>
        {
          isNewVideo && (
            <VideosConfig
              allSections={allSections}
              continueCreation={handleNewVideo}
              isNew={isNewVideo}
            />
          )
        }
        {Array.isArray(minicourseSections) &&
          minicourseSections.map(section =>
            <SectionContent
              key={section.sectionName}
              section={section}
              allSections={allSections}
            />
          )}
      </Body>
    </Container>
  )
}

export default VideoCreation;
