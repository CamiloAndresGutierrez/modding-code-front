import { Method, RequestBodyType } from "lib/types";

type RequestOptions = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const EVALUATE_PROBLEM = (problemId: string, fileInput: string): RequestOptions => ({
    requestUrl: '/problem/evaluation',
    method: 'POST',
    body: {
        "problem_id": problemId,
        "file_input": fileInput
    }
})

export const GET_PROBLEM_EVALUATION = (problemId: string): RequestOptions => ({
    requestUrl: '/problem/evaluation',
    method: 'POST',
    body: {
        "problem_id": problemId
    }
})