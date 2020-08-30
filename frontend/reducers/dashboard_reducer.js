import { RECEIVE_DASHBOARD_SELECTION } from '../actions/dashboard_actions';

export default (state={ selected: "friends", tab: "all" }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DASHBOARD_SELECTION:
      return action.selection;
    default:
      return state;
  }
};
