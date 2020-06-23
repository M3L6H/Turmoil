@dimensions.each do |dimension|
    json.set! dimension.id do
        json.extract! dimension, :name, :public, :id
    end
end