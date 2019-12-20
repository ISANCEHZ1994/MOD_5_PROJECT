class CreateAddress < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.integer :client_id
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip
      
      
    end
  end
end
