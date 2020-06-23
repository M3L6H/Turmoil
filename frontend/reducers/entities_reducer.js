import { combineReducers } from 'redux';

import beingsReducer from './beings_reducer';
import dimensionsReducer from './dimensions_reducer';
import dimensionBeingsReducer from './dimension_beings_reducer';
import rolesReducer from './roles_reducer';

export default combineReducers({
    beings: beingsReducer,
    dimensions: dimensionsReducer,
    dimensionBeings: dimensionBeingsReducer,
    roles: rolesReducer
});