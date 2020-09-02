json.being_conversation do
  json.partial! "being_conversation", being_conversation: @being_conversation
end

json.conversation do
  json.partial! "conversation", conversation: @being_conversation.conversation
end
