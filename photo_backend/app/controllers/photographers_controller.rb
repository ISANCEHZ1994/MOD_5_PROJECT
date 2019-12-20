class PhotographersController < ApplicationController

    def index
        photographers = Photographer.all
        render :json => photographers.to_json(:include => { :appointments => { :include => :client } })
        
    end

    # def show
    #       @photographers = Photographer.find_by_id (params[:id])
    #       render json: @photographers
    #    end
    
    #    def new
    
    #    end
    
    #    def create
    
    #    end
    
    #    def edit2
    #    end
    
    #    def update
    
    #    end
    
    #    def destroy
    
    #    end

end