class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :name
      t.datetime :endDate
      t.boolean :isFinished
      t.timestamps null: false
    end
  end
end
