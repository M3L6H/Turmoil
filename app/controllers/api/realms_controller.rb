class Api::RealmsController < ApplicationController
    before_action :require_logged_in, except: [:show]
    
    def show
        @realm = Realm.find_by(id: params[:id])

        if @realm
            render :show
        else
            render json: ["Could not find realm with id: #{ params[:id] }"], status: 404
        end
    end

    def create
        @realm = Realm.new(realm_params)

        if @realm.save
            # TODO: Only beings with the right permission should be able to create realms
            render :create
        else
            render json: @realm.errors.full_messages, status: 422
        end
    end

    def destroy
        @realm = Realm.find_by(id: params[:id])

        if @realm
            # TODO: Only beings with the right permissions should be able to delete realms
            @realm.destroy
            render :destroy
        else
            render json: ["Could not find realm with id: #{ params[:id] }"], status: 404
        end
    end

    def update
        @realm = Realm.find_by(id: params[:id])

        if @realm
            # TODO: Only beings with the right permissions should be able to update realms
            if @realm.update(realm_params)
                render :update
            else
                render json: @realm.errors.full_messages, status: 422
            end
        else
            render json: ["Could not find realm with id: #{ params[:id] }"], status: 404
        end
    end

private
    def realm_params
        params.require(:realm).permit(:name, :topic, :slowmode, :being_limit, :nsfw, :cluster_id, :dimension_id, :realm_type, :prev_orderable_type, :prev_orderable_id, :next_orderable_type, :next_orderable_id)
    end
end
