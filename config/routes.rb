Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    # resources :stores, only: [:index, :show]
    # resources :reviews, only: [:index, :show, :create, :destroy]
    # resource :current, only: [:show, :destroy, :create]
  end
  
end
