class ApplicationController < ActionController::Base
    helper_method :current_being, :logged_in?
    
    def current_being
        @current_being ||= Being.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to "/", status: 403 unless logged_in?
    end

    def require_logged_out
        redirect_to "/", status: 403 if logged_in?
    end

    def login(being)
        session[:session_token] = being.reset_session_token!
        @current_being = being
    end

    def logout
        current_being.reset_session_token!
        session[:session_token] = nil
        @current_being = nil
    end

    def logged_in?
        !!current_being
    end

    def being_params
        params.require(:being).permit(:username, :email, :password)
    end
end
