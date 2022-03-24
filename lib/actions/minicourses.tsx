import { Minicourse } from "lib/types/minicourse";
import { SectionContent, VideoContent, VideosUrls } from "lib/types/videos";

export const MinicourseActionTypes = {
  SET_CURRENT_MINICOURSE: 'SET_CURRENT_MINICOURSE',
  SET_MINICOURSE_VIDEO_SECTIONS: 'SET_MINICOURSE_VIDEO_SECTIONS',
  SET_CURRENT_MINICOURSE_VIDEO: 'SET_CURRENT_MINICOURSE_VIDEO',
  SET_CURRENT_MINICOURSE_VIDEO_URLS: 'SET_CURRENT_MINICOURSE_VIDEO_URLS'
}

export const setCurrentMinicourse = (minicourse: Minicourse) =>
  ({ type: MinicourseActionTypes.SET_CURRENT_MINICOURSE, payload: minicourse })

export const setMinicourseVideoSections = (value: SectionContent[]) => ({
  type: MinicourseActionTypes.SET_MINICOURSE_VIDEO_SECTIONS,
  payload: value
})

export const setCurrentVideo = (value: VideoContent) => ({
  type: MinicourseActionTypes.SET_CURRENT_MINICOURSE_VIDEO,
  payload: value,
});

export const setCurrentMinicourseVideosUrls = (value: VideosUrls) => ({
  type: MinicourseActionTypes.SET_CURRENT_MINICOURSE_VIDEO_URLS,
  payload: value
})
