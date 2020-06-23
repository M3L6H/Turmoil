class Api::SessionsController < ApplicationController
    def create
        @being = Being.find_by_credentials(being_params[:username], being_params[:password])

        if @being
            login(@being)
            render :create
        else
            render json: ["Invalid credentials"], status: 422
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}, status: 200
        else
            render json: ["Not logged in"], status: 403
        end
    end
end
