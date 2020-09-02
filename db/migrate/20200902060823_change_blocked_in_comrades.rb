class ChangeBlockedInComrades < ActiveRecord::Migration[5.2]
  def change
    remove_column :comrades, :blocked
    add_column :comrades, :blocked, :bigint
  end
end
