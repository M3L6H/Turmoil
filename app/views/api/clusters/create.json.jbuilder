json.set! @cluster.id do
    json.partial! "cluster", cluster: @cluster
end

json.set! @prev.id do
    json.partial! "cluster", cluster: @prev
end