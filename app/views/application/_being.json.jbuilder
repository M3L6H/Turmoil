json.being do
    json.extract! being, :username, :id, :status, :custom_status
end

json.dimensions do
    being.joined_dimensions.each do |dimension|
        json.extract! dimension, :name, :id
    end
end