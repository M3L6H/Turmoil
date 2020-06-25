class AddOrderToClusters < ActiveRecord::Migration[5.2]
    def change
        add_column :clusters, :next_orderable_id, :bigint
        add_column :clusters, :next_orderable_type, :string

        add_index :clusters, [:next_orderable_id, :next_orderable_type]

        add_column :clusters, :prev_orderable_id, :bigint
        add_column :clusters, :prev_orderable_type, :string

        add_index :clusters, [:prev_orderable_id, :prev_orderable_type]
    end
end
