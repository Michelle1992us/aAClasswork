Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:index, :show, :create, :update, :destroy]
  # get 'users/:id', to: 'users#show', as: 'user'
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show', as: 'user'
  # post 'users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'
  # put '/users/:id', to: 'users#update'
  # get '/users/new', to: 'users#new', as: 'new_user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'

  resources :artworks, only:[:show, :create, :update, :destroy]

  resources :artwork_shares, only:[:create, :destroy]

  resources :comments, only:[:create, :destroy, :index]

  resources :likes, only:[:destroy]
  # /users/:user_id/artworks
  resources :users do
    resources :artworks, only:[:index]
    resources :comments, only:[:index]
  end

  resources :comments do
    resources :likes, only:[:index, :create]
  end

  resources :artworks do
    resources :comments, only:[:index]
    resources :likes, only:[:index, :create]
  end
end
