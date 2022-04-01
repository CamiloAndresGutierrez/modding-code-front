import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { CircularProgress } from '@mui/material';
import { connect } from 'react-redux';

import { setCurrentMinicourseVideosUrls, setCurrentVideo } from 'lib/actions/minicourses';
import makeRequest from 'lib/client';
import { GET_VIDEO_URL_BY_ID } from 'lib/client/videos';
import { url } from 'lib/constants';
import { genericError, minicourseWithoutVideos } from 'lib/constants/errorMessages';
import { State } from 'lib/types/state';
import { ISections, Video as VideoType, VideosUrls } from 'lib/types/videos';

import { useFetch } from 'utils/hooks/useFetch';

import { Container, Section, SectionName, StyledPlayArrowIcon, Thumbnail, Video, VideoName } from './sectionVideos.styled-components';
import { responseHasErrors } from 'lib/utils';

interface IMapStateToProps {
  videosUrls?: VideosUrls[]
}

interface IMapDispatchToProps {
  setCurrentVideo?: (value: any) => any
  setVideosUrls?: (value: any) => any
}

type Props = {
  sections: ISections[]
};

const SectionsVideos = ({
  sections,
  videosUrls,
  setCurrentVideo,
  setVideosUrls
}: Props & IMapStateToProps & IMapDispatchToProps) => {
  const videoInfo = useFetch({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [filteredVideoSections, setFilteredVideoSections] = useState([]);

  const getInitialVideo = async () => {
    const fileteredSections = sections.filter(section => section.videos.length > 0);
    setFilteredVideoSections(fileteredSections);
    if (fileteredSections.length > 0) {
      try {
        const { requestUrl, body, method } = GET_VIDEO_URL_BY_ID(fileteredSections[0].videos[0].id, true)
        const serverResponse: VideoType = await makeRequest(url(requestUrl), body, method, videoInfo.accessToken);
        if (responseHasErrors(serverResponse, genericError)) return;

        setCurrentVideo({
          video: serverResponse.video_download_url,
          name: fileteredSections[0].videos[0].name,
          sectionName: fileteredSections[0].sectionName,
        });

        setVideosUrls({
          id: fileteredSections[0].videos[0].id,
          videoUrl: serverResponse.video_download_url,
        });
      }
      catch {
        alert(genericError);
      }
    }
    else {
      setErrorMessage(minicourseWithoutVideos);
    }
  }

  useEffect(() => {
    if (sections.length > 0) {
      getInitialVideo();
    }
  }, [sections]);

  const handleClick = async (section: string, video) => {
    const foundVideo = videosUrls.find(element => element.id === video.id);
    if (foundVideo) {
      setCurrentVideo({
        video: foundVideo.videoUrl,
        name: video.name,
        sectionName: section,
      });
    }
    else {
      try {
        const { requestUrl, body, method } = GET_VIDEO_URL_BY_ID(video.id, true);
        const serverResponse: VideoType = await makeRequest(url(requestUrl), body, method, videoInfo.accessToken);
        if (responseHasErrors(serverResponse, genericError)) return;

        setCurrentVideo({
          video: serverResponse.video_download_url,
          name: serverResponse.name,
          sectionName: section,
        });

        setVideosUrls({
          id: serverResponse.id,
          videoUrl: serverResponse.video_download_url
        });
      }
      catch {
        alert(genericError);
      }
    };
  };

  return (
    <Container >
      {errorMessage ? errorMessage :
        filteredVideoSections.length > 0 ? (
          filteredVideoSections.map(section => (
            <Section key={section.sectionName}>
              <SectionName>
                {section.sectionName}
              </SectionName>
              {section.videos.map(video =>
                <Video
                  key={video.id}

                  onClick={() => handleClick(section.sectionName, video)}
                >
                  <Thumbnail >
                    <StyledPlayArrowIcon />
                  </Thumbnail>
                  <VideoName

                  >
                    {video.name}
                  </VideoName>
                </Video>
              )}
            </Section>)
          )
        ) :
          <CircularProgress />
      }
    </Container>
  )
}

const mapStateToProps = (state: State): IMapStateToProps => {
  return ({
    videosUrls: state.minicourses.videosUrls
  });
}

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
  return ({
    setCurrentVideo: (value) => dispatch(setCurrentVideo(value)),
    setVideosUrls: (value) => dispatch(setCurrentMinicourseVideosUrls(value))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionsVideos);
