class CreateMissives < ActiveRecord::Migration[5.2]
    def change
        create_table :missives do |t|
            t.bigint :being_id, null: false
            t.bigint :messageable_id, null: false
            t.string :messageable_type, null: false
            t.text :body, null: false
            t.boolean :pinned, null: false, default: false
            t.timestamps
        end

        add_index :missives, :being_id
        add_index :missives, [:messageable_id, :messageable_type]
    end
end
