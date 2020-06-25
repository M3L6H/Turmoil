class AddOrderToRealms < ActiveRecord::Migration[5.2]
    def change
        add_column :realms, :next_orderable_id, :bigint
        add_column :realms, :next_orderable_type, :string

        add_index :realms, [:next_orderable_id, :next_orderable_type]

        add_column :realms, :prev_orderable_id, :bigint
        add_column :realms, :prev_orderable_type, :string

        add_index :realms, [:prev_orderable_id, :prev_orderable_type]
    end
end
