class Api::ConversationsController < ApplicationController
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

private
  def conversation_params
    params.require(:conversation).permit(:being_id, :type)
  end
end
