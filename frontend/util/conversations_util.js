export const fetchConversation = (conversationId) => (
  $.ajax({
    method: "GET",
    url: `/api/conversations/${ conversationId }`,
    dataType: "json"
  })
);

export const createConversation = (conversation) => (
  $.ajax({
    method: "POST",
    url: "/api/conversations",
    data: { conversation },
    dataType: "json"
  })
);

export const deleteConversation = (conversationId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/conversations/${ conversationId }`,
    dataType: "json"
  })
);

export const createBeingConversation = (beingConversation) => (
  $.ajax({
    method: "POST",
    url: "/api/being_conversations",
    data: { being_conversation: beingConversation },
    dataType: "json"
  })
);

export const deleteBeingConversation = (beingConversationId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/being_conversations/${ beingConversationId }`,
    dataType: "json"
  })
);
