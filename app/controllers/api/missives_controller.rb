class Api::MissivesController < ApplicationController
    before_action :require_json
    before_action :require_logged_in
    
    def create
        @missive = Missive.new(missive_params)
        @missive.username = current_being.username
        
        if @missive.save
            render :create
        else
            render json: @missive.errors.full_messages, status: 422
        end
    end

    def update
        @missive = Missive.find_by(id: params[:id])

        if @missive
            # Only users with the right permissions should be able to update missives
            if @missive.update(missive_params)
                render :update
            else
                render json: @missive.errors.full_messages, status: 422
            end
        else
            render json: ["Could not find missive with id #{ params[:id] }"], status: 404
        end
    end

private
    def missive_params
        params.require(:missive).permit(:pinned, :body, :messageable_id, :messageable_type)
    end
end
