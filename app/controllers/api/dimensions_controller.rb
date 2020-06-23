class Api::DimensionsController < ApplicationController
    before_action :require_json
    before_action :require_logged_in, except: [:index, :show]
    
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
        @dimension = Dimension.find_by(id: params[:id])
        
        if @dimension
            if current_being.owns @dimension
                @dimension.destroy
                render :destroy
            else
                render json: ["Cannot delete a dimension you don't own"], status: 403
            end
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    end

    def update
        @dimension = Dimension.find_by(id: params[:id])
        
        if @dimension
            if current_being.owns @dimension
                if @dimension.update(dimension_params)
                    render :update
                else
                    render json: @dimension.errors.full_messages, status: 422
                end
            else
                render json: ["Cannot update a dimension you don't own"], status: 403
            end
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    end

private
    def dimension_params
        params.require(:dimension).permit(:name, :public)
    end
end
