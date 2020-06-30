json.being do
    json.extract! being, :username, :id, :status, :custom_status
    json.photo_url url_for(being.photo)
end

json.dimensions do
    being.joined_dimensions.each do |dimension|
        json.set! dimension.id do
            json.extract! dimension, :name, :id
        end
    end
end