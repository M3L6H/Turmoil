import {
  RECEIVE_BEING_CONVERSATION,
  RECEIVE_CONVERSATION
} from '../actions/conversations_actions';
import { CLEAR_MISSIVES, RECEIVE_MISSIVE } from '../actions/missives_actions';
import { RECEIVE_REALM } from '../actions/realms_actions';
import { REMOVE_SESSION } from '../actions/session_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLEAR_MISSIVES:
      return {};
    case RECEIVE_BEING_CONVERSATION:
    case RECEIVE_CONVERSATION:
    case RECEIVE_REALM:
      return action.missives || {};
    case RECEIVE_MISSIVE:
      return { ...state, [action.missive.id]: action.missive };
    case REMOVE_SESSION:
      return {};
    default:
      return state;
  }
};
