import React, { useState, useRef } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
import { DELETE_VIDEO, UPDATE_VIDEO } from 'lib/client/videos';
import makeRequest from 'lib/client';
import { useFetch } from 'utils/hooks/useFetch';
import { videoDeleteFailed, videoFailedVisibilityChange, videoUpdateFailed } from 'lib/constants/errorMessages';
import { ISections, Video } from 'lib/types/videos';
import { changedVisibility, deletedVideoSuccess, videoUpdateSuccess } from 'lib/constants/successMessages';


type VideosConfigTypes = {
  video?: Video,
  section?: ISections,
  isNew?: Boolean,
  continueCreation?: (value: any) => any,
  positionChange?: (value: string, value2: any) => any,
}

const VideosConfig = ({
  video,
  section,
  positionChange = (value: string, value2: any) => { },
  isNew = false,
  continueCreation = (flag: Boolean) => { },
}: VideosConfigTypes) => {
  const { accessToken } = useFetch({});
  const [selectedSection, setSelectedSection] = useState(section && section.sectionName || "Context");
  const [videoName, setVideoName] = useState(video && video.name || "");
  const [videoFile, setVideoFile] = useState(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSectionChange = (e) => {
    const value = e.target.value;
    setSelectedSection(value);
  };

  const handleCancelCreation = () => {
    continueCreation(false);
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

  const handleSaveVideo = () => {
    const isVideoNameSet = !!videoName.length;
    const areFieldsValid = !!videoFile && isVideoNameSet;

    if (areFieldsValid) {
      console.log(selectedSection);
      console.log(videoName);
      console.log(videoFile);
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
              <button onClick={() => handleCancelCreation()}><StyledDeleteIcon /></button>
              <button><VisibilityIcon /></button>
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
              <button onClick={() => handleVideoVisibility()}><VisibilityIcon /></button>
            </ButtonGroup>
          )
        }
      </VideoInfoContainer>
    </VideoContainer>
  )

}

export default VideosConfig;
