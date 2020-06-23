import { combineReducers } from 'redux';

import beingsReducer from './beings_reducer';

export default combineReducers({
    beings: beingsReducer
});