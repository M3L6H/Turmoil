class Api::SummonsesController < ApplicationController
    before_action :require_json
    before_action :require_logged_in
    
    def create
        @summons = Summons.new(summons_params)

        if @summons.save
            # TODO: Only beings with the right permissions should be able to create summonses
            render :create
        else
            render json: @summons.errors.full_messages, status: 422
        end
    end

    def destroy
        @summons = Summons.find_by(id: params[:id])

        if @summons
            # TODO: Only beings with the right permissions should be able to destroy summonses
            @summons.destroy
            render :destroy
        else
            render json: "Could not find summons with id #{ params[:id] }", status: 404
        end
    end

    def update
        @summons = Summons.find_by(url: params[:id])

        if @summons
            # TODO: Only beings with the right permissions should be able to update summonses
            if @summons.update(summons_params)
                render :update
            else
                render json: @summons.errors.full_messages, status: 422
            end
        else
            render json: "Could not find summons with id #{ params[:id] }", status: 404
        end
    end

private
    def summons_params
        params.require(:summons).permit(:dimension_id, :expire_after, :max_uses, :temporary, :url)
    end
end
