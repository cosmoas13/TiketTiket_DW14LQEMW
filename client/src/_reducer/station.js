import { GET_STATION, GET_TYPE } from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_STATION}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_STATION}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_STATION}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default station;
