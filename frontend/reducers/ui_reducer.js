import { combineReducers } from 'redux';

import modalsReducer from './modals_reducer';
import sidebarReducer from './sidebar_reducer'

export default combineReducers({
    modals: modalsReducer,
    sidebar: sidebarReducer
});