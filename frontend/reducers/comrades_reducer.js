import { RECEIVE_COMRADE, REMOVE_COMRADE } from '../actions/comrades_actions';
import { RECEIVE_BEING } from '../actions/beings_actions';
import { RECEIVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEING:
    case RECEIVE_SESSION:
      return action.comrades;
    case RECEIVE_COMRADE:
      return { ...state, [action.comrade.id]: action.comrade };
    case REMOVE_COMRADE:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
