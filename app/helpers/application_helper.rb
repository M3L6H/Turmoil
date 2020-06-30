module ApplicationHelper
    def json_loop_or_empty(json, arr:, name:)
        if arr.any?
            json.set! name do
                arr.each { |ele| yield ele }
            end
        else
            json.set! name, {}
        end
    end
end
