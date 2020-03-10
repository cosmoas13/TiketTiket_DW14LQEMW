import { GET_TRAIN } from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const trains = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TRAIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRAIN}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TRAIN}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default trains;
