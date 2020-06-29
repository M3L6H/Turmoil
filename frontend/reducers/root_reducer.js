import { combineReducers } from 'redux';

import cableReducer from './cable_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
    cable: cableReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer
});