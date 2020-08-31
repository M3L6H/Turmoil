import { RECEIVE_BEING } from '../actions/beings_actions';
import { RECEIVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEING:
    case RECEIVE_SESSION:
      return action.comradeBeings;
    default:
      return state;
  }
};
