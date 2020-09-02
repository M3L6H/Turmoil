class Api::ComradesController < ApplicationController
  def create
    @comrade = Comrade.new(comrade_params)

    if @comrade.save
      broadcast(@comrade)
      render :create
    else
      render json: @comrade.errors.full_messages, status: 422
    end
  end

  def update
    @comrade = Comrade.find_by(id: params[:id])

    if @comrade
      # We are trying to block/unblock
      if comrade_params[:blocked] != @comrade.blocked
        # We are trying to block
        if @comrade.blocked.nil?
          update_comrade(@comrade)
        # We are trying to unblock
        # We check that the id of the entity trying to unblock matches the id
        # of the original entity who blocked in the first place
        elsif current_being.id == @comrade.blocked
          update_comrade(@comrade)
        else
          render json: ["Cannot unblock entity that you did not block!"], status: 422
        end

        return
      end

      update_comrade(@comrade)
    else
      render json: ["Could not find comrade with id #{ params[:id] }"], status: 404
    end
  end

  def destroy
    @comrade = Comrade.find_by(id: params[:id])

    if @comrade
      broadcast(@comrade, { comrade: @comrade, destroy: true })
      @comrade.destroy
      render :destroy
    else
      render json: ["Could not find comrade with id #{ params[:id] }"], status: 404
    end
  end

private
  def comrade_params
    params.require(:comrade).permit(:comrade_id, :being_id, :blocked, :pending)
  end

  def broadcast(comrade, data=nil)
    data ||= { comrade: comrade }
    BeingChannel.broadcast_to Being.find(comrade.being_id), data
    BeingChannel.broadcast_to Being.find(comrade.comrade_id), data
  end

  def update_comrade(comrade)
    if comrade.update(comrade_params)
      broadcast(comrade)
      render :update
    else
      render json: comrade.errors.full_messages, status: 422
    end
  end
end
