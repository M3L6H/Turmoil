class Api::BeingsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    
    def index
        @beings = Being.all

        respond_to do |format|
            format.html { redirect_back fallback_location: "/" }
            format.json 
        end
    end

    def show
        @being = Being.find_by(id: params[:id])

        if @being
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json 
            end
        else
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Could not find being with id #{ params[:id] }"], status: 404
                end
            end
        end
    end

    def create
        @being = Being.new(being_params)

        if @being.save
            login(@being)

            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json 
            end
        else
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: @being.errors.full_messages, status: 422
                end
            end
        end
    end

    def destroy
        if !logged_in? || current_being.id != params[:id] 
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Cannot delete another user!"], status: 403
                end
            end
            return
        end

        @being = Being.find_by(id: params[:id])

        if @being
            @being.destroy
            
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json 
            end
        else
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Could not find being with id #{ params[:id] }"], status: 404
                end
            end
        end
    end

    def update
        if !logged_in? || current_being.id != params[:id] 
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Cannot update another user!"], status: 403
                end
            end
            return
        end
        
        @being = Being.find_by(id: params[:id])

        if @being
            if @being.update(being_params)
                respond_to do |format|
                    format.html { redirect_back fallback_location: "/" }
                    format.json 
                end
            else
                respond_to do |format|
                    format.html { redirect_back fallback_location: "/" }
                    format.json do
                        render json: @being.errors.full_messages, status: 422
                    end
                end
            end
        else
            respond_to do |format|
                format.html { redirect_back fallback_location: "/" }
                format.json do
                    render json: ["Could not find being with id #{ params[:id] }"], status: 404
                end
            end
        end
    end
end
