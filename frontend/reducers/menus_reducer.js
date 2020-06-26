import { combineReducers } from 'redux';

import dimensionMenuReducer from './dimension_menu_reducer';
import realmMenuReducer from './realm_menu_reducer';

export default combineReducers({
    dimensionMenu: dimensionMenuReducer,
    realmMenu: realmMenuReducer
});