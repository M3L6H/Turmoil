class CreateBeings < ActiveRecord::Migration[5.2]
    def change
        create_table :beings do |t|
            t.string :username, null: false, limit: 32
            t.string :email, null: false
            t.string :password_digest, null: false
            t.string :session_token, null: false
            t.string :status, null: false, default: "online"
            t.string :custom_status, limit: 128
            t.timestamps
        end

        add_index :beings, :username, unique: true
        add_index :beings, :email, unique: true
        add_index :beings, :session_token, unique: true
    end
end
