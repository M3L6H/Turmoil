class CreateSummonses < ActiveRecord::Migration[5.2]
    def change
        create_table :summonses do |t|
            t.bigint :dimension_id, null: false
            t.bigint :expire_after, default: 86400
            t.integer :max_uses
            t.string :url, null: false
            t.boolean :temporary, null: false, default: false
            t.timestamps
        end

        add_index :summonses, :dimension_id
        add_index :summonses, :url, unique: true
    end
end
