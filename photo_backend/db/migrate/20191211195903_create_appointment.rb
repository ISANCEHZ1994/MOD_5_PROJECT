class CreateAppointment < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :photographer_id
      t.integer :client_id
      t.string :time
      
    end
  end
end
