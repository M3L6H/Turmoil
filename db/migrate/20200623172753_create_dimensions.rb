class CreateDimensions < ActiveRecord::Migration[5.2]
    def change
        create_table :dimensions do |t|
            t.string :name, null: false, limit: 128
            t.bigint :being_id, null: false
            t.boolean :public, null: false, default: false
            t.timestamps
        end

        add_index :dimensions, :being_id
    end
end
