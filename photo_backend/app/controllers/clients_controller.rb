class ClientsController < ApplicationController

   def index
    clients = Client.all
    render json: clients
   end

   def show
    client = Client.find_by_id (params[:id])
    render json: client
   end

   # def new

   # end

   # def create

   # end

   # def edit

   # end

   # def update

   # end

   # def destroy

   # end

end