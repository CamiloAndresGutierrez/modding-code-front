import React, { useEffect, useState } from 'react';

import ProblemsCreation from 'components/problems-creation';
import VideosCreation from 'components/videos-creation';
import { ButtonGroup, Container } from './minicourse-content.styled-components';
import { createSections } from 'lib/utils';
import { Minicourse } from 'lib/types/minicourse';
import { State } from 'lib/types/state';
import { connect } from 'react-redux';

const MinicourseContentContainer = ({ currentMinicourse, sections, problems }) => {
  const [sortedSections, setSortedSections] = useState({});
  const [tab, setTab] = useState("videos");

  const handleTabSelection = (tab) => {
    setTab(tab);
  };

  useEffect(() => {
    if (sections) {
      const sorted = createSections(sections);
      setSortedSections(sorted);
    }
  }, [sections]);

  return (
    <Container>
      <ButtonGroup tab={tab}>
        <div className={"videos"} onClick={() => handleTabSelection("videos")}>Videos</div>
        <div className={"problems"} onClick={() => handleTabSelection("problems")}>Problems</div>
      </ButtonGroup>
      {
        tab === "videos" && (
          <VideosCreation
            minicourseSections={sortedSections}
          />
        )
      }
      {
        tab === "problems" && (
          <ProblemsCreation
            problems={problems}
          />
        )
      }

    </Container>
  );
};

const mapStateToProps = (state: State) => {
  return ({
    currentMinicourse: state.minicourses.currentMinicourse
  })
}

export default connect(mapStateToProps, null)(MinicourseContentContainer);
