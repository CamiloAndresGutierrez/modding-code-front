import { Method, RequestBodyType } from "lib/types";
import { Minicourse } from "lib/types/minicourse";

type RequestOptions = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const Actions = {
    GET_RANDOMIZE_MINICOURSES_ACTION: 'get_randomized_minicourses',
    GET_MINICOURSE_BY_ID_ACTION: 'get_minicourse',
    GET_MINICOURSE_BY_USERNAME_ACTION: 'get_minicourses_by_username',
    GET_MINICOURSE_THUMB_UPLOAD_URL_ACTION: 'get_minicourse_thumb_upload_url'
}

export const GET_RANDOMIZE_MINICOURSES = (categoryId: string): RequestOptions => ({
    requestUrl: '/minicourse/get',
    method: 'POST',
    body: {
        "action": Actions.GET_RANDOMIZE_MINICOURSES_ACTION,
        "params": {
            "category_id": categoryId
        }
    }
});

export const GET_MINICOURSE_BY_ID = (minicourseId: string): RequestOptions => ({
    requestUrl: '/minicourse/get',
    method: 'POST',
    body: {
        "action": Actions.GET_MINICOURSE_BY_ID_ACTION,
        "params": {
            "id": minicourseId,
            "get_thumb": true
        }
    }
});

export const GET_MINICOURSE_BY_USERNAME: RequestOptions = {
    requestUrl: '/minicourse/get',
    method: 'POST',
    body: {
        "action": Actions.GET_MINICOURSE_BY_USERNAME_ACTION,
        "params": {}
    }
};

export const CREATE_MINICOURSE = (newMinicourseDetails: Minicourse): RequestOptions => ({
    requestUrl: '/minicourse',
    method: 'POST',
    body: {
        ...newMinicourseDetails,
        "ext": "..jpg"
    }
});

export const UPDATE_MINICOURSE = (minicourseDetails: Minicourse): RequestOptions => ({
    requestUrl: '/minicourse',
    method: 'PUT',
    body: {
        ...minicourseDetails
    }
});

export const DELETE_MINICOURSE = (minicourseId: string): RequestOptions => ({
    requestUrl: '/minicourse',
    method: 'DELETE',
    body: {
        "id": minicourseId
    }
})

export const GET_MINICOURSE_THUMB_UPLOAD_URL = (minicourseId: string): RequestOptions => ({
    requestUrl: '/minicourse',
    method: 'PUT',
    body: {
        "action": Actions.GET_MINICOURSE_THUMB_UPLOAD_URL_ACTION,
        "params": {
            "id": minicourseId
        }
    }
})