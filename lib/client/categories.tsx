import { Method, RequestBodyType } from "lib/types";

type RequestOptions = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const Actions = {
    GET_ALL_CATEGORIES_ACTION: 'get_all_categories'
}

export const GET_ALL_CATEGORIES: RequestOptions = {
    requestUrl: '/minicourse/category/get',
    method: 'POST',
    body: {
        "action": Actions.GET_ALL_CATEGORIES_ACTION,
        "params": {}
    }
}