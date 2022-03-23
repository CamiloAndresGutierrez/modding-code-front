import React, { useEffect, useState } from 'react';

import ProblemsCreation from 'components/problems-creation';
import VideosCreation from 'components/videos-creation';
import { ButtonGroup, Container } from './minicourse-content.styled-components';
import { createSections } from 'lib/utils';
import { Minicourse } from 'lib/types/minicourse';

const MinicourseContentContainer = ({ minicourse, sections, problems }) => {
  const [currentMinicourse, setCurrentMinicourse] = useState<Minicourse>({});
  const [sortedSections, setSortedSections] = useState({});
  const [tab, setTab] = useState("videos");

  useEffect(() => {
    if (minicourse) {
      setCurrentMinicourse(minicourse);
    }
  }, [minicourse]);

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
            currentMinicourseName={currentMinicourse.name}
            minicourseSections={sortedSections}
          />
        )
      }
      {
        tab === "problems" && (
          <ProblemsCreation
            problems={problems}
            currentMinicourseName={currentMinicourse.name}
          />
        )
      }

    </Container>
  );
};

export default MinicourseContentContainer;
