json.being do
  json.extract! being, :id
end

json.beings do
  if Being.all.empty?
    json.null!
  else
    Being.all.each do |b|
      json.set! b.id do
        json.extract! b, :username, :id, :status, :custom_status
      end
    end
  end
end

json.dimensions do
  if being.joined_dimensions.empty?
    json.null!
  else
    being.joined_dimensions.each do |dimension|
      json.set! dimension.id do
        json.extract! dimension, :name, :id
      end
    end
  end
end

json.comrades do
  if being.comrades.empty?
    json.null!
  else
    being.comrades.each do |comrade|
      json.set! comrade.id do
        json.partial! "application/comrade.json.jbuilder", comrade: comrade
      end
    end
  end
end

json.comrade_beings do
  if being.comrade_beings.empty?
    json.null!
  else
    being.comrade_beings.each do |comrade|
      json.set! comrade.id do
        json.partial! "application/comrade.json.jbuilder", comrade: comrade
      end
    end
  end
end

conversations = being.conversations.includes(:being_conversations) + being.joined_conversations.includes(:being_conversations)
being_conversations = []

json.conversations do
  if conversations.empty?
    json.null!
  else
    conversations.each do |c|
      being_conversations += c.being_conversations
      json.set! c.id do
        json.extract! c, :id, :being_id, :conversation_type
      end
    end
  end
end

json.being_conversations do
  if being_conversations.empty?
    json.null!
  else
    being_conversations.being_conversations.each do |bc|
      json.set! bc.id do
        json.extract! bc, :id, :being_id, :conversation_id
      end
    end
  end
end
