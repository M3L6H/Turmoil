json.clusterId @cluster.id

json.clusters do
    if @next_orderable
        json.set! @next_orderable.id do
            json.partial! "cluster", cluster: @next_orderable
        end
    end

    if @prev_orderable
        json.set! @prev_orderable.id do
            json.partial! "cluster", cluster: @prev_orderable
        end
    end
end