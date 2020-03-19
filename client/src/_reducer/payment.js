import {
  GET_PAYMENT,
  GET_TICKET,
  POST_PAYMENT,
  GET_ALLTICKET,
  UPDATE_PAYMENT,
  DELETE_PAYMENT,
  UPLOAD_PAYMENT
} from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  upload: "",
  error: null
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PAYMENT}_PENDING`:
    case `${GET_TICKET}_PENDING`:
    case `${POST_PAYMENT}_PENDING`:
    case `${GET_ALLTICKET}_PENDING`:
    case `${UPDATE_PAYMENT}_PENDING`:
    case `${DELETE_PAYMENT}_PENDING`:
    case `${UPLOAD_PAYMENT}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PAYMENT}_FULFILLED`:
    case `${GET_TICKET}_FULFILLED`:
    case `${POST_PAYMENT}_FULFILLED`:
    case `${GET_ALLTICKET}_FULFILLED`:
    case `${UPDATE_PAYMENT}_FULFILLED`:
    case `${DELETE_PAYMENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_PAYMENT}_REJECTED`:
    case `${GET_TICKET}_REJECTED`:
    case `${POST_PAYMENT}_REJECTED`:
    case `${GET_ALLTICKET}_REJECTED`:
    case `${UPDATE_PAYMENT}_REJECTED`:
    case `${DELETE_PAYMENT}_REJECTED`:
    case `${UPLOAD_PAYMENT}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${UPLOAD_PAYMENT}_FULFILLED`:
      return {
        ...state,
        upload: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default payment;
