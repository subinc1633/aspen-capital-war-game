json.set! @player.id do
    json.extract! @player, :id, :name, :score
end