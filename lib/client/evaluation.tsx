import { Method, RequestBodyType } from "lib/types";

type RequestOptions = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const Actions = {
    GET_EVALUATIONS_BY_USERNAME: 'get_evaluations_by_username'
}

export const EVALUATE_PROBLEM = (problemId: string, fileInput: string, fileType: string): RequestOptions => ({
    requestUrl: '/problem/evaluation',
    method: 'POST',
    body: {
        "problem_id": problemId,
        "file_input": fileInput,
        "file_type": fileType
    }
})

export const GET_PROBLEM_EVALUATION = (problemId: string): RequestOptions => ({
    requestUrl: '/problem/evaluation',
    method: 'POST',
    body: {
        "problem_id": problemId
    }
})

export const GET_PROBLEMS_EVALUATIONS = (problemId): RequestOptions => ({
    requestUrl: '/problem/evaluation/get',
    method: 'POST',
    body: {
        action: Actions.GET_EVALUATIONS_BY_USERNAME,
        params: {
            problem_id: problemId
        }
    }
})


export const SEND_MESSAGE_TO_EXPERT = (expert_email: string, message: string): RequestOptions => ({
    requestUrl: '/problem/send-message/expert',
    method: 'POST',
    body: {
        expert_email,
        message
    }
})