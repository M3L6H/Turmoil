json.being do
  json.extract! being, :username, :id, :status, :custom_status
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
        json.partial! "comrade", comrade: comrade
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
        json.partial! "comrade", comrade: comrade
      end
    end
  end
end
