class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.bigint :being_id, null: false
      t.string :conversation_type, null: false, default: "text"
      t.timestamps
    end

    add_index :conversations, :being_id
  end
end
