import React, {useEffect, useState} from 'react';

import ProblemsCreation from 'components/problems-creation';
import VideosCreation from 'components/videos-creation';

const MinicourseContentContainer = ({ minicourse, sections }) => {
  const [ currentMinicourse, setCurrentMinicourse ] = useState({});
  const [ tab, setTab ] = useState("videos");

  useEffect(() => {
    if(minicourse) {
      setCurrentMinicourse(minicourse);
    }
  }, [minicourse]);

  const handleTabSelection = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <b>{`${currentMinicourse.name}`}</b>
      <button onClick={() => handleTabSelection("videos")}>Videos</button>
      <button onClick={() => handleTabSelection("problems")}>Problems</button>
      {
        tab === "videos" && (
          <VideosCreation
            allSections={sections}
            minicourseSections={currentMinicourse.sections}
          />
        )
      }
      {
        tab === "problems" && (
          <ProblemsCreation />
        )
      }

    </div>
  );
};

export default MinicourseContentContainer;
