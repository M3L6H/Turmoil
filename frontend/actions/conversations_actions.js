import * as ConvUtil from "../util/conversations_util";

export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";
export const RECEIVE_CONVERSATION_ERRORS = "RECEIVE_CONVERSATION_ERRORS";
export const RECEIVE_BEING_CONVERSATION = "RECEIVE_BEING_CONVERSATION";
export const REMOVE_BEING_CONVERSATION = "REMOVE_BEING_CONVERSATION";
export const RECEIVE_BEING_CONVERSATION_ERRORS = "RECEIVE_BEING_CONVERSATION_ERRORS";

export const receiveConversation = ({
  conversation,
  beingConversations,
  missives,
  beings
}) => ({
  type: RECEIVE_CONVERSATION,
  beingConversations,
  conversation,
  missives,
  beings
});

export const removeConversation = (data) => ({
  type: REMOVE_CONVERSATION,
  conversationId: data.id
});

export const receiveConversationErrors = (errors) => ({
  type: RECEIVE_CONVERSATION_ERRORS,
  conversations: errors
});

export const receiveBeingConversation = ({
  beingConversation,
  conversation: { conversation, missives, beings }
}) => ({
  type: RECEIVE_BEING_CONVERSATION,
  beingConversation,
  conversation,
  missives,
  beings
});

export const removeBeingConversation = (data) => ({
  type: REMOVE_BEING_CONVERSATION,
  beingConversationId: data.id
});

export const receiveBeingConversationErrors = (errors) => ({
  type: RECEIVE_BEING_CONVERSATION_ERRORS,
  beingConversations: errors
});

export const fetchConversation = (conversationId) => dispatch => (
  ConvUtil.fetchConversation(conversationId)
    .then(res => dispatch(receiveConversation(res)))
    .fail(jqXHR => dispatch(receiveConversationErrors(jqXHR.responseJSON)))
);

export const createConversation = (conversation) => dispatch => (
  ConvUtil.createConversation(conversation)
    .then(res => dispatch(receiveConversation(res)))
    .fail(jqXHR => dispatch(receiveConversationErrors(jqXHR.responseJSON)))
);

export const deleteConversation = (conversationId) => dispatch => (
  ConvUtil.deleteConversation(conversationId)
    .then(res => dispatch(removeConversation(res)))
    .fail(jqXHR => dispatch(receiveConversationErrors(jqXHR.responseJSON)))
);

export const createBeingConversation = (beingConversation) => dispatch => (
  ConvUtil.createBeingConversation(beingConversation)
    .then(res => dispatch(receiveBeingConversation(res)))
    .fail(jqXHR => dispatch(receiveBeingConversationErrors(jqXHR.responseJSON)))
);

export const deleteBeingConversation = (beingConversationId) => dispatch => (
  ConvUtil.deleteBeingConversation(beingConversationId)
    .then(res => dispatch(removeBeingConversation(res)))
    .fail(jqXHR => dispatch(receiveBeingConversationErrors(jqXHR.responseJSON)))
);
