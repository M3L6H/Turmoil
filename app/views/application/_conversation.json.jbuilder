json.conversation do
  json.extract! conversation, :id, :being_id
end

json.beings do
  ([conversation.being] + conversation.joined_beings).each do |being|
    json.set! being.id do
      json.extract! being, :id, :username
    end
  end
end

json.missives do
  if Conversation.all.empty?
    json.null!
  else
    conversation.missives.each do |missive|
      json.set! missive.id do
        json.partial! "application/missive.json.jbuilder", missive: missive
      end
    end
  end
end
