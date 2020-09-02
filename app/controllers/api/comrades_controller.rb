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
      if @comrade.update(comrade_params)
        broadcast(@comrade)
        render :update
      else
        render json: @comrade.errors.full_messages, status: 422
      end
    else
      render json: ["Could not find comrade with id #{ params[:id] }"], status: 404
    end
  end

  def destroy
    @comrade = Comrade.find_by(id: params[:id])

    if @comrade
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

  def broadcast(comrade)
    BeingChannel.broadcast_to Being.find(comrade.being_id), { comrade: comrade }
    BeingChannel.broadcast_to Being.find(comrade.comrade_id), { comrade: comrade }
  end
end
