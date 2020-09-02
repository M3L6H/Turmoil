import { RECEIVE_BEING } from '../actions/beings_actions';

import {
  RECEIVE_BEING_CONVERSATION,
  REMOVE_BEING_CONVERSATION,
  RECEIVE_CONVERSATION
} from '../actions/conversations_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEING:
    case RECEIVE_CONVERSATION:
      return action.beingConversations;
    case RECEIVE_BEING_CONVERSATION:
      return { ...state, [action.beingConversation.id]: action.beingConversation };
    case REMOVE_BEING_CONVERSATION:
      const newState = Object.assign({}, state);
      delete newState[action.beingConversationId];
      return newState;
    default:
      return state;
  }
};
