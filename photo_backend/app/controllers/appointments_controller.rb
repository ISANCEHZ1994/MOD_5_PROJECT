class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: appointments.to_json(:include => { :client => { :include => :addresses}, :photographer => { :include => :photos } })
    end
 
    # def show
      
    # end
 
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