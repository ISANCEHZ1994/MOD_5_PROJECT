class Photographer < ApplicationRecord
    has_many :photos
    has_many :appointments
    
 end