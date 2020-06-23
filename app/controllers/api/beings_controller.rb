class Api::BeingsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_json
    
    def index
        @beings = Being.all
    end

    def show
        @being = Being.find_by(id: params[:id])

        if @being
            render :show
        else
            render json: ["Could not find being with id #{ params[:id] }"], status: 404
        end
    end

    def create
        @being = Being.new(being_params)

        if @being.save
            login(@being)
            render :create            
        else
            render json: @being.errors.full_messages, status: 422
        end
    end

    def destroy
        if !logged_in? || current_being.id != params[:id] 
            render json: ["Cannot delete another user!"], status: 403
            return
        end

        @being = Being.find_by(id: params[:id])

        if @being
            @being.destroy
            render :destroy
        else
            render json: ["Could not find being with id #{ params[:id] }"], status: 404
        end
    end

    def update
        if !logged_in? || current_being.id != params[:id] 
            render json: ["Cannot update another user!"], status: 403
            return
        end
        
        @being = Being.find_by(id: params[:id])

        if @being
            if @being.update(being_params)
                render :update
            else
                render json: @being.errors.full_messages, status: 422
            end
        else
            render json: ["Could not find being with id #{ params[:id] }"], status: 404
        end
    end
end
