
import getCategories from './responses/getCategories.json';
import login from './responses/login.json';
import register from './responses/register.json';
import getMinicourses from './responses/getMinicourses.json';
import getMinicourse10 from './responses/getMinicourse10.json';
import getMinicourse12 from './responses/getMinicourse12.json';
import problems10 from './responses/problems10.json';
import problem1 from './responses/problem1.json';
import problem2 from './responses/problem2.json';
import problem3 from './responses/problem3.json';

const RESPONSES = [
      {
        path: '/categories/get',
        method: 'GET',
        data: getCategories
      },
      {
        path: '/login',
        method: 'POST',
        data: login
      },
      {
        path: '/register',
        method: 'POST',
        data: register
      },
      {
        path: '/minicourses/get',
        method: 'GET',
        data: getMinicourses
      },
      {
        path: '/minicourses/get/10',
        method: 'GET',
        data: getMinicourse10
      },
      {
        path: '/minicourses/get/12',
        method: 'GET',
        data: getMinicourse12
      },
      {
        path: '/problems/get/10',
        method: 'GET',
        data: problems10
      },
      {
        path: '/problems/get/12',
        method: 'GET',
        data: problems10
      },
      {
        path: '/problem/get/1',
        method: 'GET',
        data: problem1
      },
      {
        path: '/problem/get/2',
        method: 'GET',
        data: problem2
      },
      {
        path: '/problem/get/3',
        method: 'GET',
        data: problem3
      },

];

export default RESPONSES;
