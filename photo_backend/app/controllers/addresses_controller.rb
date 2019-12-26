class AddressesController < ApplicationController

    def index
     addresses = Address.all
     render json: addresses
    end
 
    def show
     address = Address.find_by_id (params[:id])
     render json: address
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