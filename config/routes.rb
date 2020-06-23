Rails.application.routes.draw do
    root to: "static_pages#root"

    namespace :api do
        resources :beings, except: [:new, :edit]
        resources :dimension_beings, only: [:show, :destroy, :update]
        resources :dimensions, except: [:new, :edit] do
            resources :dimension_beings, only: [:create]
        end
        resource :session, only: [:create, :destroy]
    end
end
