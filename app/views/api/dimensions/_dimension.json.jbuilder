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
            json.extract! realm, :id, :name, :cluster_id, :realm_type, :next_orderable_id, :next_orderable_type, :prev_orderable_id, :prev_orderable_type
        end
    end
end

json.summonses do
    dimension.summonses.each do |summons|
        json.set! summons.id do
            json.partial! "summons", summons: summons
        end
    end
end