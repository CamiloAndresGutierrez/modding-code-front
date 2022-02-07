
import getCategories from './responses/getCategories.json';
import login from './responses/login.json';
import register from './responses/register.json';
import getMinicourse from './responses/getMinicourses.json';

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
        data: getMinicourse
    }
];

export default RESPONSES;