import { GET_TYPE } from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const type = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TYPE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TYPE}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TYPE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default type;
