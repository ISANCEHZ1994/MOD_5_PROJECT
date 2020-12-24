class ClientsController < ApplicationController

   skip_before_action :check_authentication, only: [:create, :index, :show]

   def index
    clients = Client.all
    render json: clients
   end

   def show
    client = Client.find_by_id (params[:id])
    render json: client
   end

   def create
      client = Client.new(client_params)
      # byebug
      # render json: clien
      if client.valid?
         client.save
         render json: {id: client.id, name: client.name, email: client.email, phone_number: client.phone_number, token: encode_token({"client_id": client.id})}, status: :created
      else 
         render json: { message: " Failed to create NEW_CLIENT" }, status: :not_acceptable
      end

   end

   def destroy
      client = Client.find_by_id (params[:id])
      
   end

   private 
   def client_params 

      # byebug
     params.require(:client).permit(:name, :email, :password, :phone_number)

   end

   # create_table "clients", force: :cascade do |t|
   #    t.string "name"
   #    t.string "email"
   #    t.string "password"
   #    t.integer "phone_number"
   #  end

end