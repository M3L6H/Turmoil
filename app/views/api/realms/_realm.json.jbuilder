# TODO: Should include permissions

json.realm do
    json.extract! realm, :id, :name, :topic, :slowmode, :being_limit, :nsfw, :cluster_id, :realm_type, :next_orderable_id, :next_orderable_type, :prev_orderable_id, :prev_orderable_type
end

json_loop_or_empty json, arr: json.missives, name: "missives" do |missive|
    json.set! missive.id do
        json.partial! "missive", missive: missive
    end
end