@dimensions.each do |dimension|
    json.set! dimension.id do
        json.partial! "dimension", dimension: dimension
    end
end