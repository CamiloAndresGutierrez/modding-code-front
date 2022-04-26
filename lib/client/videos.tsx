import { Method, RequestBodyType } from "lib/types"
import { Video } from "lib/types/videos";

type RequestOptions = {
  requestUrl?: string,
  method?: Method,
  body?: RequestBodyType
}

export const Actions = {
  GET_VIDEOS_BY_MINICOURSE: "get_videos_by_minicourse",
  GET_VIDEO_BY_ID: "get_video_by_id"
}

export const GET_VIDEOS_BY_MINICOURSE_ID = (minicourseId: string): RequestOptions => ({
  requestUrl: '/video/get',
  method: 'POST',
  body: {
    "action": Actions.GET_VIDEOS_BY_MINICOURSE,
    "params": {
      "minicourse_id": minicourseId
    }
  }
});

export const GET_VIDEO_URL_BY_ID = (videoId, getUrl = false): RequestOptions => ({
  requestUrl: '/video/get',
  method: 'POST',
  body: {
    "action": Actions.GET_VIDEO_BY_ID,
    "params": {
      "id": videoId,
      "get_video_url": getUrl,
    }
  }
});

export const CREATE_VIDEO = (newVideoInfo: Video): RequestOptions => ({
  requestUrl: '/video',
  method: 'POST',
  body: {
    ...newVideoInfo,
    ext: "mp4"
  }
})

export const DELETE_VIDEO = (videoId: string): RequestOptions => ({
  requestUrl: '/video',
  method: 'DELETE',
  body: {
    id: videoId
  }
})

export const UPDATE_VIDEO = (videoDetails: Video): RequestOptions => ({
  requestUrl: '/video',
  method: 'PUT',
  body: {
    ...videoDetails
  }
})