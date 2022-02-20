import React, { useEffect, useState } from 'react';
import { Container, Section, SectionName, StyledPlayArrowIcon, Thumbnail, Video, VideoName } from './sectionVideos.styled-components';

const SectionsVideos = (props) => {
  const { sections, layout } = props;

  const [currentVideo, setCurrentVideo] = useState(sections.length ? ({
    video: sections[0].videos[0].video,
    name: sections[0].videos[0].name,
    sectionName: sections[0].sectionName,
  }) : null);

  useEffect(() => {
    if (currentVideo) {
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
    <Container layout={layout}>
      {
        sections.map(section => {
          return (
            <Section key={section.sectionName}>
              <SectionName>{section.sectionName}</SectionName>
              {section.videos.map(video =>
                <Video
                  key={video.name}
                  layout={layout}
                  onClick={() => handleClick(section.sectionName, video)}
                >
                  <Thumbnail layout={layout}>
                    <StyledPlayArrowIcon />
                  </Thumbnail>
                  <VideoName
                    layout={layout}
                  >
                    {video.name}
                  </VideoName>
                </Video>
              )}
            </Section>
          )
        })
      }
    </Container>
  )
}

export default SectionsVideos;
