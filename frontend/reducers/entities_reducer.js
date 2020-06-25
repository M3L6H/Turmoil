import { combineReducers } from 'redux';

import beingsReducer from './beings_reducer';
import clustersReducer from './clusters_reducer';
import dimensionsReducer from './dimensions_reducer';
import dimensionBeingsReducer from './dimension_beings_reducer';
import realmsReducer from './realms_reducer';
import rolesReducer from './roles_reducer';

export default combineReducers({
    beings: beingsReducer,
    clusters: clustersReducer,
    dimensions: dimensionsReducer,
    dimensionBeings: dimensionBeingsReducer,
    realms: realmsReducer,
    roles: rolesReducer
});