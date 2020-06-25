import { combineReducers } from 'redux';

import menusReducer from './menus_reducer';
import modalsReducer from './modals_reducer';
import sidebarReducer from './sidebar_reducer';

export default combineReducers({
    menus: menusReducer,
    modals: modalsReducer,
    sidebar: sidebarReducer
});