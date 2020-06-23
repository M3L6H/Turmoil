import { combineReducers } from 'redux';

import beingsReducer from './beings_reducer';
import dimensionsReducer from './dimensions_reducer';

export default combineReducers({
    beings: beingsReducer,
    dimensions: dimensionsReducer
});