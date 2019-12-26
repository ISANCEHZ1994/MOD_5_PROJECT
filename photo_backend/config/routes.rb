Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :clients
  get '/clients', to: 'clients#index'
  get '/appointments', to: 'appointments#index'
  get '/photographers', to: 'photographers#index'
  get '/photos', to: 'photos#index'
  get '/addresses', to: 'addresses#index'

  

end
