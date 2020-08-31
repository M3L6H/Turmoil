import { RECEIVE_BEING } from '../actions/beings_actions';
import { RECEIVE_SESSION } from '../actions/session_actions';
import { RECEIVE_COMRADE_BEING, REMOVE_COMRADE_BEING } from '../actions/comrades_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEING:
    case RECEIVE_SESSION:
      return action.comradeBeings;
    case RECEIVE_COMRADE_BEING:
      return { ...state, [action.comrade.id]: action.comrade };
    case REMOVE_COMRADE_BEING:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
