
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
  // {
  //   path: '/problems/get/10',
  //   method: 'GET',
  //   data: problems10
  // },
  // {
  //   path: '/problems/get/12',
  //   method: 'GET',
  //   data: problems10
  // },
  // {
  //   path: '/problem/get/1',
  //   method: 'GET',
  //   data: problem1
  // },
  // {
  //   path: '/problem/get/2',
  //   method: 'GET',
  //   data: problem2
  // },
  // {
  //   path: '/problem/get/3',
  //   method: 'GET',
  //   data: problem3
  // },
  // {
  //   path: '/expert-minicourses/get/90',
  //   method: 'GET',
  //   data: expertMinicourses90
  // },
  // {
  //   path: '/sections/get',
  //   method: 'GET',
  //   data: getSections
  // },

];

export default RESPONSES;
