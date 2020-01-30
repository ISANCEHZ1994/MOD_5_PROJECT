class CreatePhotographer < ActiveRecord::Migration[6.0]
  def change
    create_table :photographers do |t|
      t.string :name
      t.string :profile_pic_url
      t.string :bio_quote
      t.string :experiance
      t.string :specialty
      t.string :email
      t.string :phone_number
    
    end
  end
end
