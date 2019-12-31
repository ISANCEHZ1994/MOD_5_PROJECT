Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :clients
  # get '/clients', to: 'clients#index'
  post '/login', to: 'auth#create'
  resources :appointments
  # get '/appointments', to: 'appointments#index'
  resources :photographers
  # get '/photographers', to: 'photographers#index'
  resources :photos
  # get '/photos', to: 'photos#index'

  # get '/addresses', to: 'addresses#index'

  

end
