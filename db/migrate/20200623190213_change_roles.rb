class ChangeRoles < ActiveRecord::Migration[5.2]
    def change
        rename_column :roles, :manage_messages, :manage_missives
        rename_column :roles, :send_messages, :send_missives
    end
end
