import { RECEIVE_BEINGS, RECEIVE_BEING, REMOVE_BEING } from '../actions/beings_actions';
import { RECEIVE_MISSIVE } from '../actions/missives_actions';
import { RECEIVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEINGS:
      return action.beings;
    case RECEIVE_MISSIVE:
      if (!action.being) return state;
    case RECEIVE_SESSION:
    case RECEIVE_BEING:
      return { ...state, ...action.beings };
    case REMOVE_BEING:
      const newState = Object.assign({}, state);
      delete newState[action.beingId];
      return newState;
    default:
      return state;
  }
};