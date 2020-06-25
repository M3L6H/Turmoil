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

json.clusters do
    dimension.clusters.each do |cluster|
        json.set! cluster.id do
            json.partial! "cluster", cluster: cluster
        end
    end
end

json.realms do
    dimension.realms.each do |realm|
        json.set! realm.id do
            json.extract! realm, :id, :name
        end
    end
end