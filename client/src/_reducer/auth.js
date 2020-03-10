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
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${LOGIN}_FULFILLED`:
    case `${REGISTER}_FULFILLED`:
    case `${GET_USER}_FULFILLED`:
      console.log("login fullfilled");
      return {
        ...state,
        logedIn: true,
        data: action.payload,
        loading: false
      };
    case `${LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
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
