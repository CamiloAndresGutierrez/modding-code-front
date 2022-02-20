import React, { useState, useRef } from 'react';

const VideosConfig = ({
  allSections,
  continueCreation = (flag: Boolean) => {},
  video={},
  section={},
  isNew=false,
}) => {
  const [ selectedSection, setSelectedSection ] = useState(section.sectionName || "Context");
  const [ videoName, setVideoName ] = useState(video.name || "");
  const [ videoFile, setVideoFile ] = useState(null);
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
    const oldSection = section.sectionName;
    console.log("oldSection", section.sectionName);
    console.log("newSection",selectedSection);
    console.log("videoName", videoName);
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
    <div>
      { isNew && (
          <input
            type="file"
            accept="video/mp4"
            ref={fileRef}
            onChange={() => handleVideoUpload()}
          />
        )
      }
      <input type={"text"} value={videoName} onChange={(e) => handleNameChange(e)}/>
      <select value={selectedSection} onChange={(e) => handleSectionChange(e)}>
      {
        Array.isArray(allSections) && allSections.map(section =>
          <option key={section.name} value={section.name}>
            { section.name }
          </option>
        )
      }
      </select>
      {
        isNew ? (
          <div>
            <button onClick={() => handleSaveVideo()}>Save</button>
            <button onClick={() => handleCancelCreation()}>Delete</button>
          </div>
        ) : (
          <div>
            <button>Up</button>
            <button>Down</button>
            <button onClick={() => handleUpdate()}>Update</button>
            <button>Delete</button>
          </div>
        )
      }
    </div>
  )

}

export default VideosConfig;
