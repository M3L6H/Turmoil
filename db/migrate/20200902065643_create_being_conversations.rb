class CreateBeingConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :being_conversations do |t|
      t.bigint :being_id, null: false
      t.bigint :conversation_id, null: false
      t.timestamps
    end

    add_index :being_conversations, [:being_id, :conversation_id], unique: true
  end
end
