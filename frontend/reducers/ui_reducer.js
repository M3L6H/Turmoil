import { combineReducers } from 'redux';

import contentReducer from './content_reducer';
import contextMenuReducer from './context_menu_reducer';
import dashboardReducer from './dashboard_reducer';
import headerReducer from './header_reducer';
import invertedReducer from './inverted_reducer';    
import menusReducer from './menus_reducer';
import modalsReducer from './modals_reducer';
import sidebarReducer from './sidebar_reducer';

export default combineReducers({
  content: contentReducer,
  contextMenu: contextMenuReducer,
  dashboard: dashboardReducer,
  header: headerReducer,
  inverted: invertedReducer,
  menus: menusReducer,
  modals: modalsReducer,
  sidebar: sidebarReducer
});