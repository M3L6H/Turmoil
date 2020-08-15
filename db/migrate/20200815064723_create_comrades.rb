class CreateComrades < ActiveRecord::Migration[5.2]
  def change
    create_table :comrades do |t|
      t.bigint :comrade_id, null: false
      t.bigint :being_id, null: false
      t.boolean :blocked, null: false, default: false
      t.boolean :pending, null: false, default: true
      t.timestamps
    end

    add_index :comrades, [:comrade_id, :being_id], unique: true
  end
end
