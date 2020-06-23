@beings.each do |being|
    json.set! being.id do
        json.extract! being, :id, :username
    end
end