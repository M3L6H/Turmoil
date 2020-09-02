import { RECEIVE_BEING } from '../actions/beings_actions';

import {
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION
} from '../actions/conversations_actions';

export default (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BEING:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      return { ...state, [action.conversation.id]: action.conversation };
    case REMOVE_CONVERSATION:
      const newState = Object.assign({}, state);
      delete newState[action.conversationId];
      return newState;
    default:
      return state;
  }
};
