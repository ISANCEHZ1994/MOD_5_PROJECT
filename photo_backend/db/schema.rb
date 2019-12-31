# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_12_224722) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.integer "client_id"
    t.string "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
  end

  create_table "appointments", force: :cascade do |t|
    t.integer "photographer_id"
    t.integer "client_id"
    t.time "time"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "phone_number"
  end

  create_table "photographers", force: :cascade do |t|
    t.string "name"
    t.string "profile_pic_url"
    t.string "bio_quote"
    t.string "experiance"
    t.string "specialty"
    t.string "email"
    t.integer "phone_number"
  end

  create_table "photos", force: :cascade do |t|
    t.integer "photographer_id"
    t.string "url"
  end

end
