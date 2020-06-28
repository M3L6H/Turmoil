Rails.application.routes.draw do
    namespace :api do
        resources :beings, except: [:new, :edit]
        resources :clusters, only: [:create, :destroy, :update]

        resources :dimensions, except: [:new, :edit] do
            resources :dimension_beings, only: [:create]
            resources :roles, only: [:create]
        end

        resources :dimension_beings, only: [:show, :destroy, :update]
        resources :missives, only: [:create, :update]
        resources :realms, except: [:index, :new, :edit]
        resources :roles, only: [:show, :destroy, :update]
        resource :session, only: [:create, :destroy]

        patch "/dimensions/:id/update_order", to: "dimensions#update_order"
        put "/dimensions/:id/update_order", to: "dimensions#update_order"
    end

    root to: "static_pages#root"
    get "*path" => redirect("/")
end
