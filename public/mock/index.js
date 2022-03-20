
import getCategories from './responses/getCategories.json';
import getMinicourses from './responses/getMinicourses.json';
import minicourse1 from './responses/minicourse1.json';
import minicourse2 from './responses/minicourse2.json';
import problems10 from './responses/problems10.json';
import problem1 from './responses/problem1.json';
import problem2 from './responses/problem2.json';
import problem3 from './responses/problem3.json';
import expertMinicourses90 from './responses/expertMinicourses90.json';
import getSections from './responses/getSections.json';

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
  }
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
