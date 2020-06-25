# TODO: Should include permissions and missives

json.realm do
    json.extract! realm, :id, :name, :topic, :slowmode, :being_limit, :nsfw, :cluster_id, :type
end