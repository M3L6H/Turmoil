class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:conversation])
    stream_for @conversation
  end

  def received(data)
  end

  def unsubscribed
      # cleanup
  end
end
