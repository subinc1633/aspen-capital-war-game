Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :player, only: [:index, :create]
  end
end
