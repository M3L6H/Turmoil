class CreateDimensionBeings < ActiveRecord::Migration[5.2]
    def change
        create_table :dimension_beings do |t|
            t.bigint :dimension_id, null: false
            t.bigint :being_id, null: false
            t.bigint :role_id
            t.string :nickname, null: false, limit: 32
            t.boolean :banned, null: false, default: false
            t.boolean :temporary, null: false, default: false
            t.timestamps
        end

        add_index :dimension_beings, [:being_id, :dimension_id], unique: true
        add_index :dimension_beings, :role_id
    end
end
