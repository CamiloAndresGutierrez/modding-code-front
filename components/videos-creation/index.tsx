import React, { useState } from 'react';

import SectionContent from 'components/section-content';
import VideosConfig from 'components/section-content/videosConfig';
import { Body, Container, Header, MinicourseName } from './videos-creation.styled-components';
import { State } from 'lib/types/state';
import { connect } from 'react-redux';

const VideosCreation = ({ minicourseSections, currentMinicourse }) => {
  const [isNewVideo, setIsNewVideo] = useState(false);

  return (
    <Container>
      <Header>
        <MinicourseName>
          {currentMinicourse.name}
        </MinicourseName>
        <button onClick={() => setIsNewVideo(!isNewVideo)}>
          {isNewVideo ? "Cancel" : "New video"}
        </button>
      </Header>
      <Body>
        {isNewVideo && (
          <VideosConfig
            isNew={isNewVideo}
            currentMinicourse={currentMinicourse}
            allSections={minicourseSections}
          />
        )}
        {Array.isArray(minicourseSections) &&
          minicourseSections.map(section =>
            <SectionContent
              key={section.sectionName}
              section={section}
            />
          )}
      </Body>
    </Container>
  )
}

const mapStateToProps = (state: State) => {
  return ({
    currentMinicourse: state.minicourses.currentMinicourse
  })
}

export default connect(mapStateToProps, null)(VideosCreation);
