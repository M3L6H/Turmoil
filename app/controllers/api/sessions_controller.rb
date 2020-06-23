class Api::SessionsController < ApplicationController
    def create
        params = user_params
        @user = User.find_by_credentials(params.username, params.password)

        if @user
            login(@user)
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
