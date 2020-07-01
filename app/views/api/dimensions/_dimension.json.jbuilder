json.dimension do
    json.extract! dimension, :name, :public, :being_id, :id
end

json_loop_or_empty json, arr: dimension.dimension_beings, name: "dimension_beings" do |dimension_being|
    json.set! dimension_being.id do
        json.partial! "dimension_being", dimension_being: dimension_being
    end
end

json_loop_or_empty json, arr: dimension.clusters, name: "clusters" do |cluster|
    json.set! cluster.id do
        json.partial! "cluster", cluster: cluster
    end
end

json_loop_or_empty json, arr: dimension.realms, name: "realms" do |realm|
    json.set! realm.id do
        json.extract! realm, :id, :name, :cluster_id, :realm_type, :next_orderable_id, :next_orderable_type, :prev_orderable_id, :prev_orderable_type
    end
end

json_loop_or_empty json, arr: dimension.summonses, name: "summonses" do |summons|
    json.set! summons.id do
        json.partial! "summons", summons: summons
    end
end