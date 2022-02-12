
const initialState = {
  minicourse: {}
}

export const minicourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_MINICOURSE":
            return {
              minicourse: action.payload
            }
        default:
            return state;
    }
}
