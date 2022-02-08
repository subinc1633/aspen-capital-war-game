class Api::PlayersController < ApplicationController
    def index
        @players = Player.all
        render 'api/players/index'
    end

    def create
        @player = Player.new(player_params)
        if @player.save
            render 'api/players/index'
        else
            render json: @player.errors.full_messages, status: 422
        end
    end

    def update
        @player = Player.find(params[:id])
        if @player.update(player_params)
            render 'api/players/index'
        else
            render json: @player.errors.full_messages, status: 422
        end
    end

    private

    def player_params
        params.require(:player).permit(:name, :score)
    end
end