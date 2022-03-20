import { Method, RequestBodyType } from "lib/types";

type RequestOptions = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const Actions = {
    GET_RANDOMIZE_MINICOURSES_ACTION: 'get_randomized_minicourses',
    GET_MINICOURSE_BY_ID_ACTION: 'get_minicourse'
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
})
