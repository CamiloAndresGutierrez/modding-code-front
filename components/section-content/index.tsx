import React, { useEffect, useState } from 'react';

import { ISections } from 'lib/types/videos';

import { Button, HR, SectionHeader } from './section-content.styled-components';
import VideosConfig from './videosConfig';

const SectionContent = ({ section }) => {
  const [changedSection, setChangedSection] = useState("");
  const [sectionInfo, setSectionInfo] = useState<ISections>({
    sectionName: "",
    videos: []
  });

  const handlePositionChange = (changedSection: string, newOrder) => {
    setChangedSection(changedSection);
    setSectionInfo({ sectionName: changedSection, videos: [...newOrder] });
  }

  const cancelOrderChange = () => {
    setChangedSection("");
    setSectionInfo({ ...section });
  }

  const saveNewOrder = () => {
  }

  useEffect(() => {
    setSectionInfo({ ...section });
  }, [section]);

  return (
    <div>
      <SectionHeader>
        <b>{sectionInfo.sectionName}</b>
        {changedSection === sectionInfo.sectionName &&
          <div>
            <Button onClick={() => saveNewOrder()}>Save</Button>
            <Button secondary onClick={() => cancelOrderChange()} >Cancel</Button>
          </div>
        }
      </SectionHeader>
      <HR />
      {
        sectionInfo.videos.map(video =>
          <VideosConfig
            key={video.name}
            video={video}
            section={sectionInfo}
            positionChange={handlePositionChange}
          />
        )
      }
    </div>
  );
};

export default SectionContent;
