import { combineReducers } from 'redux';

import contextMenuReducer from './context_menu_reducer';
import headerReducer from './header_reducer';
import invertedReducer from './inverted_reducer';    
import menusReducer from './menus_reducer';
import modalsReducer from './modals_reducer';
import sidebarReducer from './sidebar_reducer';

export default combineReducers({
    contextMenu: contextMenuReducer,
    header: headerReducer,
    inverted: invertedReducer,
    menus: menusReducer,
    modals: modalsReducer,
    sidebar: sidebarReducer
});