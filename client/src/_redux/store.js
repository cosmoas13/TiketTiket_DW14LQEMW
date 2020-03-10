import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware/index";
import auth from "../_reducer/auth";
import ticket from "../_reducer/ticket";
import station from "../_reducer/station";
import type from "../_reducer/type";
import train from "../_reducer/train";
import payment from "../_reducer/payment";

// Global state
const rootReducers = combineReducers({
  auth,
  ticket,
  station,
  type,
  train,
  payment
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
