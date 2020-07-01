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
            render json: ["Could not find summons with id #{ params[:id] }"], status: 404
        end
    end

    def update
        @summons = Summons.find_by(url: params[:id])

        if @summons
            # TODO: Only beings with the right permissions should be able to update summonses
            if params[:summons]
                if @summons.update(summons_params)
                    render :update
                else
                    render json: @summons.errors.full_messages, status: 422
                end
            elsif (@summons.expire_after.nil? || @summons.created_at + @summons.expire_after.minutes >= DateTime.now) && (@summons.max_uses.nil? || @summons.max_uses > 0)
                @summons.update(max_uses: @summons.max_uses - 1) unless @summons.max_uses.nil?
                render :update
            else
                @summons.destroy
                render json: ["Sorry, this summons has expired!"], status: 404
            end
        else
            render json: ["Sorry, this summons has expired!"], status: 404
        end
    end

private
    def summons_params
        params.require(:summons).permit(:dimension_id, :expire_after, :max_uses, :temporary, :url)
    end
end
