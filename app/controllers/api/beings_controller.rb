class Api::BeingsController < ApplicationController
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
        @being = Being.find_by(id: params[:id])

        if @being
            @being.destroy
            render :destroy
        else
            render json: ["Could not find being with id #{ params[:id] }"], status: 404
        end
    end

    def update
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
