Rails.application.routes.draw do
    root to: "static_pages#root"

    namespace :api do
        resources :beings, except: [:new, :edit]
        resource :session, only: [:create, :destroy]
    end
end
