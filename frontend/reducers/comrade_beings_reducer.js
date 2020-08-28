import { RECEIVE_BEING } from '../actions/beings_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEING:
      return action.comradeBeings;
    default:
      return state;
  }
};
