class CreateClusters < ActiveRecord::Migration[5.2]
    def change
        create_table :clusters do |t|
            t.string :name, null: false, limit: 128
            t.boolean :private, null: false, default: false
            t.bigint :permitted_roles, null: false, array: true, default: []
            t.bigint :dimension_id, null: false
            t.timestamps
        end

        add_index :clusters, :dimension_id
    end
end
