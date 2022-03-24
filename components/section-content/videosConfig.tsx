import React, { useState, useRef } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
  ButtonGroup,
  StyledDeleteIcon,
  StyledSaveIcon,
  UploadedVideo,
  VideoContainer,
  VideoInfo,
  VideoInfoContainer
} from './section-content.styled-components';

import { url, videoSections } from 'lib/constants';
import { CREATE_VIDEO, DELETE_VIDEO, UPDATE_VIDEO } from 'lib/client/videos';
import makeRequest, { makeFileUploadRequest } from 'lib/client';
import { useFetch } from 'utils/hooks/useFetch';
import { videoDeleteFailed, videoFailedVisibilityChange, videoUpdateFailed } from 'lib/constants/errorMessages';
import { ISections, Video } from 'lib/types/videos';
import { changedVisibility, deletedVideoSuccess, videoUpdateSuccess } from 'lib/constants/successMessages';
import { Minicourse } from 'lib/types/minicourse';
import { getParamsFromUrl } from 'lib/utils';
import { connect } from 'react-redux';
import { State } from 'lib/types/state';


type VideosConfigTypes = {
  video?: Video,
  section?: ISections,
  isNew?: Boolean,
  positionChange?: (value: string, value2: any) => any,
  currentMinicourse?: Minicourse,
  accessToken?: string
}

const VideosConfig = ({
  video,
  section,
  currentMinicourse = {},
  positionChange = (value: string, value2: any) => { },
  isNew = false,
  accessToken = ""
}: VideosConfigTypes) => {
  const [selectedSection, setSelectedSection] = useState(section && section.sectionName || "Context");
  const [videoName, setVideoName] = useState(video && video.name || "");
  const [videoFile, setVideoFile] = useState(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSectionChange = (e) => {
    const value = e.target.value;
    setSelectedSection(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setVideoName(value);
  };

  const handleUpdate = async () => {
    const updatedVideo = {
      ...video,
      name: videoName,
      section: selectedSection,
    }

    const { requestUrl, body, method } = UPDATE_VIDEO({
      id: video.id,
      ...updatedVideo
    });

    try {
      await makeRequest(url(requestUrl), body, method, accessToken);
      alert(videoUpdateSuccess);
    }
    catch {
      alert(videoUpdateFailed);
    }
  };

  const handleVideoUpload = () => {
    const file = fileRef.current.files[0];
    setVideoFile(file);
  };

  const createNewVideoRequest = () => {
    const { requestUrl, body, method } = CREATE_VIDEO({
      name: videoName,
      minicourse_id: currentMinicourse.id,
      section: selectedSection,
    })

    return makeRequest(url(requestUrl), body, method, accessToken);
  }

  const handleSaveVideo = async () => {
    const isVideoNameSet = !!videoName.length;
    const areFieldsValid = !!videoFile && isVideoNameSet;
    if (areFieldsValid) {
      const response = await createNewVideoRequest();
      const thumbnailURL = response.upload_url;
      const params = getParamsFromUrl(thumbnailURL);
      // makeFileUploadRequest(thumbnailURL, params, videoFile);
    }
    else {
      alert("All fields in new video are required.")
    }
  }

  const handleChangePosition = (action: string) => {
    const { videos } = section;
    const idx = videos.findIndex(sectionVideo => sectionVideo.id === video.id);
    const newVideosOrder = [...videos];
    let currentVideoPos;
    switch (action) {
      case "increase":
        if (idx === newVideosOrder.length - 1) { break; }
        currentVideoPos = newVideosOrder[idx];
        newVideosOrder[idx] = newVideosOrder[idx + 1];
        newVideosOrder[idx + 1] = currentVideoPos;
        break;
      case "decrease":
        if (idx === 0) { break; }
        currentVideoPos = newVideosOrder[idx];
        newVideosOrder[idx] = newVideosOrder[idx - 1];
        newVideosOrder[idx - 1] = currentVideoPos;
        break;
    }
    positionChange(section.sectionName, newVideosOrder);
  }

  const handleDeleteVideo = async () => {
    const { requestUrl, body, method } = DELETE_VIDEO(video.id);
    try {
      const wasDeleted = await makeRequest(url(requestUrl), body, method, accessToken);
      if (wasDeleted === "Success") {
        alert(deletedVideoSuccess);
      }
    }
    catch {
      alert(videoDeleteFailed);
    }
  }

  const handleVideoVisibility = async () => {
    const isVisible = video.visible;
    const { requestUrl, body, method } = UPDATE_VIDEO({
      id: video.id,
      visible: !isVisible,
    });

    try {
      await makeRequest(url(requestUrl), body, method, accessToken);
      alert(changedVisibility);
    }
    catch {
      alert(videoFailedVisibilityChange);
    }
  }

  return (
    <VideoContainer>
      {isNew && (
        <input
          type="file"
          accept="video/mp4"
          ref={fileRef}
          onChange={() => handleVideoUpload()}
        />
      )}
      {
        !isNew && (
          <UploadedVideo>
            <PlayArrowIcon />
          </UploadedVideo>
        )
      }
      <VideoInfoContainer>
        <VideoInfo>
          <input type={"text"} value={videoName} onChange={(e) => handleNameChange(e)} />
          <select value={selectedSection} onChange={(e) => handleSectionChange(e)}>
            {
              videoSections.map(section =>
                <option key={section.name} value={section.slug}>
                  {section.name}
                </option>
              )
            }
          </select>
        </VideoInfo>
        {
          isNew ? (
            <ButtonGroup>
              <button onClick={() => handleSaveVideo()}><StyledSaveIcon /></button>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              {
                section.videos.length > 1 ?
                  <>
                    <button onClick={() => handleChangePosition("decrease")}><KeyboardArrowUpIcon /></button>
                    <button onClick={() => handleChangePosition("increase")}><KeyboardArrowDownIcon /></button>
                  </> : null
              }
              <button onClick={() => handleUpdate()}><StyledSaveIcon /></button>
              <button onClick={() => handleDeleteVideo()}><StyledDeleteIcon /></button>
              <button onClick={() => handleVideoVisibility()}>
                {
                  video.visible ? <VisibilityIcon /> : <VisibilityOffIcon />
                }
              </button>
            </ButtonGroup>
          )
        }
      </VideoInfoContainer>
    </VideoContainer>
  )
};

const mapStateToProps = (state: State) => {
  return ({
    accessToken: state.site.accessToken
  })
}

export default connect(mapStateToProps, null)(VideosConfig);
