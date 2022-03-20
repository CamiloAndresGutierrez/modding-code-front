import { Method, RequestBodyType } from "lib/types"

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
})

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
})