import {
    url
} from '../constants';

export const fetchMinicourseProblems = async (minicourseId) => {
  const problems = await fetch(url(`/problems/get/${minicourseId}`));
  return problems;
};

export const fetchMinicourseProblemById = async (problemId) => {
  const problem = await fetch(url(`/problem/get/${problemId}`));
  return problem;
};
