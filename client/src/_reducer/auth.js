import { REGISTER, LOGIN, GET_USER } from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  logedIn: false,
  loading: false,
  error: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${LOGIN}_FULFILLED`:
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        logedIn: true,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response
          ? action.payload.response.data.message
          : action.payload.message
      };
    case "LOGOUT":
      console.log("logout");
      return {
        ...state,
        authenticated: false,
        data: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default auth;
