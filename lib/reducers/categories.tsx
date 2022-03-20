import { CategoryActionTypes } from 'lib/actions/categories';
import { InitialStateType } from 'lib/types/categories';

const initialState: InitialStateType = {
  currentCategory: {}
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoryActionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload
      }
    default:
      return state;
  }
}
