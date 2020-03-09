import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware/index";
import auth from "../_reducer/auth";
// import species from "../_reducers/species";

// Global state
const rootReducers = combineReducers({ auth });

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
