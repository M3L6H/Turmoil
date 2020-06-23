class Api::RolesController < ApplicationController
    before_action :require_json
    before_action :require_logged_in, except: [:show]
    
    def show
        @role = Role.find_by(id: params[:id])

        if @role
            render :show
        else
            render json: ["Could not find role with id #{id}"], status: 404
        end
    end

    def create
        @role = Role.new(role_params)     
        @role.dimension_id = params[:dimension_id]
        
        if @role.save
            render :create
        else
            render json: @role.errors.full_messages, status: 422
        end
    end

    def destroy
        @role = Role.find_by(id: params[:id])

        if @role
            # TODO: Only beings with the right permissions should delete roles
            @role.destroy
            render :destroy
        else
            render json: ["Could not find role with id #{id}"], status: 404
        end
    end

    def update
        @role = Role.find_by(id: params[:id])

        if @role
            # TODO: Only beings with the right permissions should update roles
            if @role.update(role_params)
                render :update
            else
                render json: @role.errors.full_messages, status: 422
            end
        else
            render json: ["Could not find role with id #{id}"], status: 404
        end
    end

private
    def role_params
        params.require(:role).permit(:name, :administrator, :manage_dimension, 
            :manage_roles, :manage_realms, :kick_members, :ban_members, 
            :create_summons, :change_nickname, :manage_nickname, 
            :read_see_text_voice, :send_missives, :manage_missives, :embed_links, 
            :attach_files, :all_mentions, :voice_connect, :speak, :mute_members, 
            :deafen_members, :move_members, :priority_speaker)
    end
end
