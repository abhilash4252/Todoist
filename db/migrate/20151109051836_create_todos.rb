class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :name
      t.string :endDate
      t.string :endTime
      t.boolean :isFinished
      t.timestamps null: false
    end
  end
end
