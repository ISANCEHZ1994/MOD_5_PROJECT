class Client < ApplicationRecord
   has_many :appointments
   has_many :addresses

end
