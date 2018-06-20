Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'
  resources :messages, only: [:index, :create], format: 'json'
end
