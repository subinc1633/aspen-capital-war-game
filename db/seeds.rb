# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.delete_all
ApplicationRecord.connection.reset_pk_sequence!('players')

player1 = Player.create!(name: 'Player 1', score: 0)
player2 = Player.create!(name: 'Player 2', score: 0)