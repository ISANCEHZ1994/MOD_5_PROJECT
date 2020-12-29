class ClientMailer < ActionMailer::Base
    default :from => "Israel.pro1994@gmail.com"

 def registration_confirmation(client)
    client = client
    mail(:to => "#{client.name} <#{client.email}>", :subject => "Registration Confirmation")
 end
