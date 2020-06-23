class Api::DimensionsController < ApplicationController
    before_action :require_logged_in, only: [:create]
    
    def index
        respond_to do |format|
            format.html { redirect_back fallback_location: "/" }
            format.json do
                @dimensions = Dimension.where(public: true)
                render :index
            end
        end
    end

    def show
    end

    def create
    end

    def destroy
    end

    def update
    end
end
