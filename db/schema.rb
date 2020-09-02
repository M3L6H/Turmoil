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

ActiveRecord::Schema.define(version: 2020_09_02_065643) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "being_conversations", force: :cascade do |t|
    t.bigint "being_id", null: false
    t.bigint "conversation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["being_id", "conversation_id"], name: "index_being_conversations_on_being_id_and_conversation_id", unique: true
  end

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

  create_table "clusters", force: :cascade do |t|
    t.string "name", limit: 128, null: false
    t.boolean "private", default: false, null: false
    t.bigint "permitted_roles", default: [], null: false, array: true
    t.bigint "dimension_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "next_orderable_id"
    t.string "next_orderable_type"
    t.bigint "prev_orderable_id"
    t.string "prev_orderable_type"
    t.index ["dimension_id"], name: "index_clusters_on_dimension_id"
    t.index ["next_orderable_id", "next_orderable_type"], name: "index_clusters_on_next_orderable_id_and_next_orderable_type"
    t.index ["prev_orderable_id", "prev_orderable_type"], name: "index_clusters_on_prev_orderable_id_and_prev_orderable_type"
  end

  create_table "comrades", force: :cascade do |t|
    t.bigint "comrade_id", null: false
    t.bigint "being_id", null: false
    t.boolean "pending", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "blocked"
    t.index ["comrade_id", "being_id"], name: "index_comrades_on_comrade_id_and_being_id", unique: true
  end

  create_table "conversations", force: :cascade do |t|
    t.bigint "being_id", null: false
    t.string "conversation_type", default: "text", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["being_id"], name: "index_conversations_on_being_id"
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

  create_table "missives", force: :cascade do |t|
    t.bigint "being_id", null: false
    t.bigint "messageable_id", null: false
    t.string "messageable_type", null: false
    t.text "body", null: false
    t.boolean "pinned", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.index ["being_id"], name: "index_missives_on_being_id"
    t.index ["messageable_id", "messageable_type"], name: "index_missives_on_messageable_id_and_messageable_type"
  end

  create_table "realms", force: :cascade do |t|
    t.string "name", limit: 128, null: false
    t.text "topic", default: "", null: false
    t.integer "slowmode", default: 0, null: false
    t.integer "being_limit"
    t.boolean "nsfw", default: false, null: false
    t.bigint "cluster_id"
    t.string "realm_type", default: "text", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "dimension_id", null: false
    t.bigint "next_orderable_id"
    t.string "next_orderable_type"
    t.bigint "prev_orderable_id"
    t.string "prev_orderable_type"
    t.index ["cluster_id"], name: "index_realms_on_cluster_id"
    t.index ["dimension_id"], name: "index_realms_on_dimension_id"
    t.index ["next_orderable_id", "next_orderable_type"], name: "index_realms_on_next_orderable_id_and_next_orderable_type"
    t.index ["prev_orderable_id", "prev_orderable_type"], name: "index_realms_on_prev_orderable_id_and_prev_orderable_type"
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

  create_table "summonses", force: :cascade do |t|
    t.bigint "dimension_id", null: false
    t.bigint "expire_after", default: 1440
    t.integer "max_uses"
    t.string "url", null: false
    t.boolean "temporary", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimension_id"], name: "index_summonses_on_dimension_id"
    t.index ["url"], name: "index_summonses_on_url", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
