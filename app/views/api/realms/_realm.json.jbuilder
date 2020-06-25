# TODO: Should include permissions and missives

json.realm do
    json.extract! realm, :id, :name, :topic, :slowmode, :being_limit, :nsfw, :cluster_id, :type, :next_orderable_id, :next_orderable_type, :prev_orderable_id, :prev_orderable_type
end