class Api::BeingConversationsController < ApplicationController
  before_action :require_json
  before_action :require_logged_in

  def create
    @being_conversation = BeingConversation.new(being_conversation_params)

    if @being_conversation.save
      render :create
    else
      render json: @being_conversation.errors.full_messages, status: 422
    end
  end

  def destroy
    @being_conversation = BeingConversation.find_by(id: params[:id])

    if @being_conversation
      @being_conversation.destroy
      render :destroy
    else
      render json: ["Could not find being conversation with id #{ params[:id] }"], status: 404
    end
  end

private
  def being_conversation_params
    params.require(:being_conversation).permit(:being_id, :conversation_id)
  end
end
