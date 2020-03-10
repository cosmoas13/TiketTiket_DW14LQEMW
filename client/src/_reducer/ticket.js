import { GET_TICKET, POST_TICKET } from "../config/constanst";
// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TICKET}_PENDING`:
    case `${POST_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TICKET}_FULFILLED`:
    case `${POST_TICKET}_FULFILLED`:
      // console.log(action.payload, "payload ticket");
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TICKET}_REJECTED`:
    case `${POST_TICKET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default ticket;
