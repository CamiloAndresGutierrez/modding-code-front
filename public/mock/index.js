
import getCategories from './responses/getCategories.json';

const RESPONSES = [
  {
    path: '/minicourse/category/get',
    method: 'POST',
    data: getCategories,
  },
  {
    path: '/minicourse/get',
    method: 'POST',
  },
  {
    path: '/video/get',
    method: 'POST'
  },
  {
    path: '/problem/get',
    method: 'POST'
  },
  {
    path: '/minicourse',
    method: 'PUT'
  },
  {
    path: '/minicourse',
    method: 'POST'
  },
  {
    path: '/minicourse',
    method: 'DELETE'
  },
  {
    path: '/problem/evaluation',
    method: 'POST'
  },
  {
    path: '/problem/evaluation/get',
    method: 'POST'
  }
];

export default RESPONSES;
