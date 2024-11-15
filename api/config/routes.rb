Rails.application.routes.draw do
  resources :todos, except: %i[new edit]
end
