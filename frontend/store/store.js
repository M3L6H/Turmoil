import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

export default (preloadedState) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);
