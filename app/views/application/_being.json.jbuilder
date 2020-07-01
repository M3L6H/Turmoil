json.being do
    json.extract! being, :username, :id, :status, :custom_status
    json.icon_url do 
        if being.photo.attached?
            url_for(being.photo)
        else
            nil
        end
    end
end

json.dimensions do
    being.joined_dimensions.each do |dimension|
        json.set! dimension.id do
            json.extract! dimension, :name, :id
        end
    end
end