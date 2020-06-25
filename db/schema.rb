# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_25_174929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beings", force: :cascade do |t|
    t.string "username", limit: 32, null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "status", default: "online", null: false
    t.string "custom_status", limit: 128
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_beings_on_email", unique: true
    t.index ["session_token"], name: "index_beings_on_session_token", unique: true
    t.index ["username"], name: "index_beings_on_username", unique: true
  end

  create_table "dimension_beings", force: :cascade do |t|
    t.bigint "dimension_id", null: false
    t.bigint "being_id", null: false
    t.bigint "role_id"
    t.string "nickname", limit: 32, null: false
    t.boolean "banned", default: false, null: false
    t.boolean "temporary", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["being_id", "dimension_id"], name: "index_dimension_beings_on_being_id_and_dimension_id", unique: true
    t.index ["role_id"], name: "index_dimension_beings_on_role_id"
  end

  create_table "dimensions", force: :cascade do |t|
    t.string "name", limit: 128, null: false
    t.bigint "being_id", null: false
    t.boolean "public", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["being_id"], name: "index_dimensions_on_being_id"
  end

  create_table "realms", force: :cascade do |t|
    t.string "name", limit: 128, null: false
    t.text "topic", default: "", null: false
    t.integer "slowmode", default: 0, null: false
    t.integer "being_limit"
    t.boolean "nsfw", default: false, null: false
    t.bigint "cluster_id", null: false
    t.string "type", default: "text", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cluster_id"], name: "index_realms_on_cluster_id"
  end

  create_table "roles", force: :cascade do |t|
    t.bigint "dimension_id", null: false
    t.string "name", limit: 128, null: false
    t.boolean "administrator", default: false, null: false
    t.boolean "manage_dimension", default: false, null: false
    t.boolean "manage_roles", default: false, null: false
    t.boolean "manage_realms", default: false, null: false
    t.boolean "kick_members", default: false, null: false
    t.boolean "ban_members", default: false, null: false
    t.boolean "create_summons", default: true, null: false
    t.boolean "change_nickname", default: true, null: false
    t.boolean "manage_nickname", default: false, null: false
    t.boolean "read_see_text_voice", default: true, null: false
    t.boolean "send_missives", default: true, null: false
    t.boolean "manage_missives", default: false, null: false
    t.boolean "embed_links", default: true, null: false
    t.boolean "attach_files", default: true, null: false
    t.boolean "all_mentions", default: true, null: false
    t.boolean "voice_connect", default: true, null: false
    t.boolean "speak", default: true, null: false
    t.boolean "video", default: true, null: false
    t.boolean "mute_members", default: false, null: false
    t.boolean "deafen_members", default: false, null: false
    t.boolean "move_members", default: false, null: false
    t.boolean "priority_speaker", default: false, null: false
    t.boolean "can_be_deleted", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimension_id"], name: "index_roles_on_dimension_id"
  end

end
