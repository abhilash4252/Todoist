class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :name
      t.date :endDate
      t.time :endTime
      t.boolean :isFinished
      t.timestamps null: false
    end
  end
end
