class CreateRoles < ActiveRecord::Migration[5.2]
    def change
        create_table :roles do |t|
            t.bigint :dimension_id, null: false
            t.string :name, null: false, limit: 128
            t.boolean :administrator,       null: false, default: false
            t.boolean :manage_dimension,    null: false, default: false
            t.boolean :manage_roles,        null: false, default: false
            t.boolean :manage_realms,       null: false, default: false
            t.boolean :kick_members,        null: false, default: false
            t.boolean :ban_members,         null: false, default: false
            t.boolean :create_summons,      null: false, default: true
            t.boolean :change_nickname,     null: false, default: true
            t.boolean :manage_nickname,     null: false, default: false
            t.boolean :read_see_text_voice, null: false, default: true
            t.boolean :send_messages,       null: false, default: true
            t.boolean :manage_messages,     null: false, default: false
            t.boolean :embed_links,         null: false, default: true
            t.boolean :attach_files,        null: false, default: true
            t.boolean :all_mentions,        null: false, default: true
            t.boolean :voice_connect,       null: false, default: true
            t.boolean :speak,               null: false, default: true
            t.boolean :video,               null: false, default: true
            t.boolean :mute_members,        null: false, default: false
            t.boolean :deafen_members,      null: false, default: false
            t.boolean :move_members,        null: false, default: false
            t.boolean :priority_speaker,    null: false, default: false
            t.boolean :can_be_deleted,      null: false, default: true
            t.timestamps
        end

        add_index :roles, :dimension_id
    end
end
