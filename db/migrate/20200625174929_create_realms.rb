class CreateRealms < ActiveRecord::Migration[5.2]
    def change
        create_table :realms do |t|
            t.string :name, null: false, limit: 128
            t.text :topic, null: false, limit: 1024, default: ""
            t.integer :slowmode, null: false, default: 0
            t.integer :being_limit
            t.boolean :nsfw, null: false, default: false
            t.bigint :cluster_id, null: false
            t.string :type, null: false, default: "text"
            t.timestamps
        end

        add_index :realms, :cluster_id
    end
end
