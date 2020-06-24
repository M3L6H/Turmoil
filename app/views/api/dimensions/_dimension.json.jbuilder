json.dimension do
    json.extract! dimension, :name, :public, :being_id, :id
end

json.dimension_beings do
    dimension.dimension_beings.each do |dimension_being|
        json.set! dimension_being.id do
            json.partial! "dimension_being", dimension_being: dimension_being
        end
    end
end