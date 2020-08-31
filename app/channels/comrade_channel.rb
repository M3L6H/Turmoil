class ComradeChannel < ApplicationCable::Channel
  def subscribed
    being_id = params[:being_id]
    @comrades = Comrade.where("being_id = ? OR comrade_id = ?", being_id, being_id)
    stream_for @comrades
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
