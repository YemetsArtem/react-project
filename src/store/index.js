import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";
import logger from "../middlewares/logger";
import randomId from "../middlewares/randomId";
import api from "../middlewares/api";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, randomId, logger, api)
);

const store = createStore(reducer, enhancer);
window.store = store;

export default store;
