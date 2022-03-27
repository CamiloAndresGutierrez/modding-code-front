import { MinicourseActionTypes } from 'lib/actions/minicourses';
import { InitialStateType } from 'lib/types/minicourse';

const initialState: InitialStateType = {
    currentMinicourse: {},
    sectionsContent: [],
    currentVideo: {},
    videosUrls: []
}

export const minicoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MinicourseActionTypes.SET_CURRENT_MINICOURSE:
            return {
                ...state,
                currentMinicourse: action.payload
            };
        case MinicourseActionTypes.SET_MINICOURSE_VIDEO_SECTIONS:
            return {
                ...state,
                sections: action.payload
            };
        case MinicourseActionTypes.SET_CURRENT_MINICOURSE_VIDEO:
            return {
                ...state,
                currentVideo: action.payload
            };
        case MinicourseActionTypes.SET_CURRENT_MINICOURSE_VIDEO_URLS:
            return {
                ...state,
                videosUrls: [
                    ...state.videosUrls,
                    action.payload
                ]
            };
        default:
            return state;
    }
}
