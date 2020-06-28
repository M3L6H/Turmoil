class AddUsernameToMissives < ActiveRecord::Migration[5.2]
    def change
        add_column :missives, :username, :string, null: false
    end
end
