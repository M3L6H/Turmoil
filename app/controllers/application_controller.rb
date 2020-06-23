class ApplicationController < ActionController::Base

    def being_params
        params.require(:user).permit(:username, :email, :password)
    end
end
