import {
  GET_PAYMENT,
  GET_TICKET,
  POST_PAYMENT,
  GET_ALLTICKET
} from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PAYMENT}_PENDING`:
    case `${GET_TICKET}_PENDING`:
    case `${POST_PAYMENT}_PENDING`:
    case `${GET_ALLTICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PAYMENT}_FULFILLED`:
    case `${GET_TICKET}_FULFILLED`:
    case `${POST_PAYMENT}_FULFILLED`:
    case `${GET_ALLTICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_PAYMENT}_REJECTED`:
    case `${GET_TICKET}_REJECTED`:
    case `${POST_PAYMENT}_REJECTED`:
    case `${GET_ALLTICKET}_FULFILLED`:
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
