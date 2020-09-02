class BeingChannel < ApplicationCable::Channel
  def subscribed
    @being = Being.find_by(id: params[:being])
    stream_for @being
  end

  def received(data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
