
const initialState = {
  loading: false,
  data: [],
  error: '',
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES_REQUEST":
            return {
              ...state,
              loading: true
            }
        case "GET_CATEGORIES_SUCCESS":
            return {
              loading: false,
              data: action.payload,
              error: ''
            }
        case "GET_CATEGORIES_FAILURE":
          return {
            loading: false,
            data: [],
            error: action.payload
          }
        default:
            return state;
    }
}
