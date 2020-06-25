class UpdateRealms < ActiveRecord::Migration[5.2]
    def change
        change_column_null :realms, :cluster_id, true
        add_column :realms, :dimension_id, :bigint, null: false
        add_index :realms, :dimension_id
    end
end
