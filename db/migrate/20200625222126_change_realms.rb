class ChangeRealms < ActiveRecord::Migration[5.2]
    def change
        rename_column :realms, :type, :realm_type
    end
end
