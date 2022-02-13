import {
    url
} from '../constants';

export const fetchAllMinicourses = async () => {
    const minicourses = await fetch(url("/minicourses/get"));
    return minicourses;
}

export const fetchMinicourseById = async (minicourseId) => {
    const minicourse = await fetch(url(`/minicourses/get/${minicourseId}`));
    return minicourse;
}
