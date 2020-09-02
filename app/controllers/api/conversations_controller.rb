class Api::ConversationsController < ApplicationController
  before_action :require_json
  before_action :require_logged_in

  def show
    @conversation = Conversation.find_by(id: params[:id])
  end

  def create
    @conversation = Conversation.new(conversation_params)

    if @conversation.save
      render :create
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  def destroy
    @conversation = Conversation.find_by(id: params[:id])

    if @conversation

      if current_being.id != @conversation.being_id 
        render json: ["Cannot delete a conversation you didn't create!"], status: 403
        return
      end

      @conversation.destroy
      render :destroy
    else
      render json: ["Could not find conversation with id #{ params[:id] }"], status: 404
    end
  end

private
  def conversation_params
    params.require(:conversation).permit(:being_id, :type)
  end
end
