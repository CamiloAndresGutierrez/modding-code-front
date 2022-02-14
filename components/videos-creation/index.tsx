import React, { useState } from 'react';

import SectionContent from 'components/section-content';
import VideosConfig from 'components/section-content/videosConfig';

const VideoCreation = ({ allSections, minicourseSections}) => {
  const [ isNewVideo, setIsNewVideo ] = useState(false);

  const handleNewVideo = (flag) => {
    setIsNewVideo(flag);
  };

  return (
    <div>
      <button
        disabled={isNewVideo}
        onClick={() => handleNewVideo(true)}
      >
        Upload
      </button>
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
    </div>
  )
}

export default VideoCreation;
