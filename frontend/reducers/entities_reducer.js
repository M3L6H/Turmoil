import { combineReducers } from 'redux';

import beingConversationsReducer from './being_conversations_reducer';
import beingsReducer from './beings_reducer';
import clustersReducer from './clusters_reducer';
import comradesReducer from './comrades_reducer';
import comradeBeingsReducer from './comrade_beings_reducer';
import conversationsReducer from './conversations_reducer';
import dimensionsReducer from './dimensions_reducer';
import dimensionBeingsReducer from './dimension_beings_reducer';
import missivesReducer from './missives_reducer';
import realmsReducer from './realms_reducer';
import rolesReducer from './roles_reducer';
import searchBeingsReducer from './search_beings_reducer';
import summonsesReducer from './summonses_reducer';

export default combineReducers({
  beingConversations: beingConversationsReducer,
  beings: beingsReducer,
  clusters: clustersReducer,
  comrades: comradesReducer,
  comradeBeings: comradeBeingsReducer,
  conversations: conversationsReducer,
  dimensions: dimensionsReducer,
  dimensionBeings: dimensionBeingsReducer,
  missives: missivesReducer,
  realms: realmsReducer,
  roles: rolesReducer,
  searchBeings: searchBeingsReducer,
  summonses: summonsesReducer
});