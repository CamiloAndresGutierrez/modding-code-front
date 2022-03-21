import { Method, RequestBodyType } from "lib/types";

type RequestOptions = {
  requestUrl?: string,
  method?: Method,
  body?: RequestBodyType
}

export const Actions = {
  GET_PROBLEMS_BY_MINICOURSE_ACTION: 'get_problems_by_minicourse',
  GET_PROBLEMS_BY_ID_ACTION: 'get_problem_by_id'
}

export const GET_PROBLEMS_BY_MINICOURSE = (minicourseId: string): RequestOptions => ({
  requestUrl: '/problem/get',
  method: 'POST',
  body: {
    "action": Actions.GET_PROBLEMS_BY_MINICOURSE_ACTION,
    "params": {
      "minicourse_id": minicourseId
    }
  }
});

export const GET_PROBLEMS_BY_ID = (problemId: string): RequestOptions => ({
  requestUrl: '/problem/get',
  method: 'POST',
  body: {
    "action": Actions.GET_PROBLEMS_BY_ID_ACTION,
    "params": {
      "id": problemId
    }
  }
});
