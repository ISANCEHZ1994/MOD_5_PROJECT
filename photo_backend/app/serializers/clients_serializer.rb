class ClientsSerializer < ApplicationModel::Serializer
    attributes :name, :email, :phone_number 
end
