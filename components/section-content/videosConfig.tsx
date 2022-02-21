import React, { useState, useRef } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { ButtonGroup, UploadedVideo, VideoContainer, VideoInfo, VideoInfoContainer } from './section-content.styled-components';

type Video = {
  id: number,
  video: string,
  name: string,
}

type Section = {
  sectionName: string,
  videos: Video[],
}


const VideosConfig = ({
  allSections,
  continueCreation = (flag: Boolean) => { },
  video = {
    video: "",
    name: ""
  },
  section = {
    sectionName: ""
  },
  isNew = false,
}) => {
  console.log(`%c <-- section: -->`, 'background-color: black; color: white; font-weight: bold', section);
  console.log(`%c <-- video: -->`, 'background-color: black; color: white; font-weight: bold', video);
  const [selectedSection, setSelectedSection] = useState(section.sectionName || "Context");
  const [videoName, setVideoName] = useState(video.name || "");
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

  const handleUpdate = () => {
    const updatedVideo = {
      ...video,
      name: videoName
    }
    console.log("updatedVideo", updatedVideo);
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
              Array.isArray(allSections) && allSections.map(section =>
                <option key={section.name} value={section.name}>
                  {section.name}
                </option>
              )
            }
          </select>
        </VideoInfo>
        {
          isNew ? (
            <ButtonGroup>
              <button onClick={() => handleSaveVideo()}><SaveIcon /></button>
              <button onClick={() => handleCancelCreation()}><DeleteIcon /></button>
              <button><VisibilityIcon /></button>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <button><KeyboardArrowUpIcon /></button>
              <button><KeyboardArrowDownIcon /></button>
              <button onClick={() => handleUpdate()}><SaveIcon /></button>
              <button><DeleteIcon /></button>
              <button><VisibilityIcon /></button>
            </ButtonGroup>
          )
        }
      </VideoInfoContainer>

    </VideoContainer>
  )

}

export default VideosConfig;
