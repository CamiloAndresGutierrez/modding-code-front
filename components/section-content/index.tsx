import React, { useEffect, useState } from 'react';

import { Button, HR, SectionHeader } from './section-content.styled-components';
import VideosConfig from './videosConfig';

import { ISections } from 'lib/types/videos';
import { UPDATE_VIDEO } from 'lib/client/videos';
import { url } from 'lib/constants';
import makeRequest from 'lib/client';

import { State } from 'lib/types/state';
import { connect } from 'react-redux';

const SectionContent = ({ section, accessToken }) => {
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
    const newOrderUpdate = sectionInfo.videos.map((element, index) => {
      const update = {
        id: element.id,
        order: index + 1
      }
      const { requestUrl, method, body } = UPDATE_VIDEO(update);
      return makeRequest(url(requestUrl), body, method, accessToken);
    });

    Promise.all(newOrderUpdate)
      .then(() =>
        alert("Updated order")
      )
      .catch(() =>
        alert("Failed to update order")
      );
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

const mapStateToProps = (state: State) => {
  return ({
    accessToken: state.site.accessToken
  })
}

export default connect(mapStateToProps, null)(SectionContent);
