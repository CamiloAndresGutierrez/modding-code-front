import { Method, RequestBodyType } from "lib/types";
import { Problem } from "lib/types/problems";

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

export const CREATE_PROBLEM = (problemDetails: Problem): RequestOptions => ({
  requestUrl: '/problem',
  method: 'POST',
  body: {
    ...problemDetails
  }
})

export const UPDATE_PROBLEM = (problemDetails: Problem): RequestOptions => ({
  requestUrl: '/problem',
  method: 'PUT',
  body: {
    ...problemDetails
  }
})

export const SEND_EXPERT_EMAIL = (userDetails): RequestOptions => ({
  requestUrl: '/user/signup',
  method: 'POST',
  body: {
    ...userDetails
  }
})

export const SEND_STUDENT_EMAIL = (userDetails): RequestOptions => ({
  requestUrl: '/user/signup',
  method: 'POST',
  body: {
    ...userDetails
  }
})

export const UPLOAD_PROBLEM_TESTCASE = (problemId: string, inName: string, outName: string): RequestOptions => ({
  requestUrl: '/problem/testcase',
  method: 'POST',
  body: {
    id: problemId,
    input_name: inName,
    output_name: outName
  }
})