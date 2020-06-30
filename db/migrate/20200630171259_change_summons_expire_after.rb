class ChangeSummonsExpireAfter < ActiveRecord::Migration[5.2]
    def change
        change_column_default :summonses, :expire_after, 1440
    end
end
