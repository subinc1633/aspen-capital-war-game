class EditPlayersColumnsNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :players, :name, false
    change_column_null :players, :score, false
  end
end
