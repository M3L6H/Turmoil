class Api::SessionsController < ApplicationController
    def create
        @being = Being.find_by_credentials(being_params[:username], being_params[:password])

        if @being
            login(@being)

            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json 
            end
        else
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Invalid credentials"], status: 422
                end
            end
        end
    end

    def destroy
        if logged_in?
            logout

            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: {}, status: 200
                end
            end
        else
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Not logged in"], status: 403
                end
            end
        end
    end
end
