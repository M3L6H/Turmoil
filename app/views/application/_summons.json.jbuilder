json.summons do
    json.extract! summons, :id, :dimension_id, :expire_after, :max_uses, :created_at, :url, :temporary
end

json.dimension do
    json.extract! summons.dimension, :id, :name
end