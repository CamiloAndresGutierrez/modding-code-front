import React, { useEffect, useState } from 'react';
import { Container } from './sectionVideos.styled-components';

const SectionsVideos = (props) => {
  const { sections } = props;

  const [ currentVideo, setCurrentVideo ] = useState(sections.length ? ({
    video: sections[0].videos[0].video,
    name: sections[0].videos[0].name,
    sectionName: sections[0].sectionName,
  }) : null);

  useEffect(() => {
    if (currentVideo){
      props.currentVideo(currentVideo);
    }
  }, [currentVideo]);

  const handleClick = (section, videoInfo) => {
    setCurrentVideo({
      video: videoInfo.video,
      name: videoInfo.name,
      sectionName: section,
    })
  }

  return (
    <Container>
      {
        sections.map(section => {
          return (
            <div key={section.sectionName}>
              <b>{section.sectionName}</b>
              {section.videos.map(video =>
                <div
                  onClick={() => handleClick(section.sectionName, video)}
                  key={video.name}
                >
                  {video.name}
                </div>)}
            </div>
          )
        })
      }
    </Container>
  )
}

export default SectionsVideos;
