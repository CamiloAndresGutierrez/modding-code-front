import React from 'react';

import VideosConfig from './videosConfig';

const SectionContent = ({ section, allSections }) => {
  return (
    <div>
      <b>{section.sectionName}</b>
      {
        section.videos.map(video =>
          <VideosConfig
            key={video.name}
            video={video}
            section={section}
            allSections={allSections}
          />
        )
      }
    </div>
  );
};

export default SectionContent;
