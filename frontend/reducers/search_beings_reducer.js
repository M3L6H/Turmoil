import { RECEIVE_SEARCH_BEINGS } from '../actions/beings_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_BEINGS:
      return action.beings;
    default:
      return state;
  }
};
