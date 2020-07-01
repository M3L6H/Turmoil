import { combineReducers } from 'redux';

import invertedReducer from './inverted_reducer';    
import menusReducer from './menus_reducer';
import modalsReducer from './modals_reducer';
import sidebarReducer from './sidebar_reducer';

export default combineReducers({
    inverted: invertedReducer,
    menus: menusReducer,
    modals: modalsReducer,
    sidebar: sidebarReducer
});