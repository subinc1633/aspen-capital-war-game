class EditPlayersTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :players, :name, true
    change_column_null :players, :score, true
  end
end
