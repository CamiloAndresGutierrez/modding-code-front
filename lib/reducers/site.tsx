import { InitialStateType } from 'lib/types/site';
import { SiteActionTypes } from 'lib/actions/site';

const initialState: InitialStateType = {
    accessToken: ""
}

export const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SiteActionTypes.SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            };
        default:
            return state;
    }
}
