class PhotosController < ApplicationController

    skip_before_action :check_authentication, only: [:create, :index, :show]


    def index
        photos = Photo.all
        render json: photos
    end

    def show
        photo = Photo.find_by_id (params[:id])
        render json: photo
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