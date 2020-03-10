import { GET_PAYMENT } from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PAYMENT}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PAYMENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_PAYMENT}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default payment;
