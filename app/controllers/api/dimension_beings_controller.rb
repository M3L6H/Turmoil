class Api::DimensionBeingsController < ApplicationController
    before_action :require_json
    before_action :require_logged_in, except: [:show]
    
    def show
        @dimension_being = DimensionBeing.find_by(id: params[:id])

        if @dimension_being 
            render :show
        else
            render json: ["Could not find dimension being with id #{params[:id]}"], status: 404
        end
    end

    def create
        # Initialize the dimension being
        # We don't need any special params because we have everything we need
        # already
        @dimension_being = DimensionBeing.new
        @dimension_being.dimension_id = params[:dimension_id]
        @dimension_being.being_id = current_being.id
        @dimension_being.nickname = current_being.username

        @dimension_being.save!
    end

    def destroy
        @dimension_being = DimensionBeing.find_by(id: params[:id])

        if @dimension_being
            # TODO: Only beings with the appropriate permissions should be able
            # to boot others from the dimension
            @dimension_being.destroy
            render :destroy
        else
            render json: ["Could not find dimension being with id #{params[:id]}"], status: 404
        end
    end

    def update
        @dimension_being = DimensionBeing.find_by(id: params[:id])

        if @dimension_being
            # TODO: Only beings with the appropriate permissions should be able
            # to update others in the dimension
            if @dimension_being.update(dimension_being_params)
                @dimension_being.destroy
                render :destroy
            else
                render json: @dimension_being.errors.full_messages, status: 422
            end
        else
            render json: ["Could not find dimension being with id #{params[:id]}"], status: 404
        end
    end

private 
    def dimension_being_params
        params.require(:dimensionBeing).permit(:nickname)
    end
end
