import React, { useState } from 'react';

import VideosConfig from './videosConfig';

const SectionContent = ({ section, allSections }) => {
  return (
    <div>
      <b>{section.sectionName}</b>
      {
        section.videos.map((video, index) =>
          <VideosConfig
            key={video.name}
            video={video}
            index={index}
            section={section}
            allSections={allSections}
          />
        )
      }
    </div>
  );
};

export default SectionContent;
