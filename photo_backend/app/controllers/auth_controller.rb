class AuthController < ApplicationController
    
    skip_before_action :check_authentication, only: [:create]
    # USE THIS TEMPLET FOR ANY FUTRURE PROJECTS
    def create
        #gets the login input for username in this case for client
        client = Client.find_by(email: params[:email])

        #checks if user/client exist
        byebug
        if client &&  client.authenticate(params[:password])    
            byebug
            render json: {email: client.email, id: client.id, token: encode_token({"client_id": client.id})} #this is what gets checked in localStorage
        else
            render json: {error: "Invalid username or password!"}
        end
    end
end