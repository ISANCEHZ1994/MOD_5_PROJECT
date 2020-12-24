class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: appointments.to_json(:include => { :client => { :include => :addresses}, :photographer => { :include => :photos } })
    end

    def create
        # byebug
        time = Time.parse(appointment_params[:time])
        appointment = Appointment.new(appointment_params)
        appointment.time = time
        # byebug
        if  appointment.valid?
            appointment.save
            appointment.update(time: time)
            # byebug
            render json: appointment, :include => [:client, :photographer]
            # render json: {photographer_id: photographer.id, client_id: client.id, time: " " , status: :created
        else 
            render json: { message: " Failed to create NEW_APPOINTMENT" }, status: :not_acceptable
        end
    end
 
    def destroy
        appointment = Appointment.find(params[:id])
        # byebug
        appointment.destroy 
    end

    private
    def appointment_params
        # byebug
        params.require(:appointment).permit(:photographer_id, :client_id, :time)
        # params.require(:client).permit(:name, :email, :password, :phone_number)
    end
 end