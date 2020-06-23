class Api::DimensionsController < ApplicationController
    before_action :require_json
    before_action :require_logged_in, only: [:create]
    
    def index
        # TODO: Update with query parameters
        @dimensions = Dimension.where(public: true)
        render :index
    end

    def show
        @dimension = Dimension.find_by(id: params[:id])

        if @dimension
            render :show
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    end

    def create
        @dimension = Dimension.new(dimension_params)
        @dimension.being_id = current_being.id

        if @dimension.save
            render :create
        else
            render json: @dimension.errors.full_messages, status: 422
        end
    end

    def destroy
    end

    def update
    end

private
    def dimension_params
        params.require(:dimension).permit(:name, :public)
    end
end
